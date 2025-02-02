import { Button, Select } from "antd";
import React, { useState } from "react";
import {
  useGetAllUsersQuery,
  useDeactivateUserMutation,
  useActivateUserMutation,
} from "../../Redux/Features/Admin/UserManagementApi/userManagement.api";
import moment from "moment";
import {
  useDeleteABookMutation,
  useGetAllBooksQuery,
} from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useVerifyOrderMutation,
} from "../../Redux/Features/Orders/Order.api";
import { IResponseBook, TransactionDetails } from "../../Types/global";
import { useNavigate } from "react-router-dom";
const ManageAdmin = () => {
  const [activeTab, setActiveTab] = useState("manageUser");
  const { data: Users } = useGetAllUsersQuery(undefined);
  const [deleteBook] = useDeleteABookMutation(undefined);
  const [updateOrderStatus] = useUpdateOrderStatusMutation(undefined);
  const [verifyOrder] = useVerifyOrderMutation(undefined);
  const [deactivateUser] = useDeactivateUserMutation();
  const [activateUser] = useActivateUserMutation();
  const navigate = useNavigate();
  const { data: Orders } = useGetAllOrdersQuery(undefined, {
    skip: activeTab !== "manageOrder",
  });
  const { data: Books } = useGetAllBooksQuery(undefined, {
    skip: activeTab !== "manageProducts",
  });

  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId);
  };
  console.log(Books);
  const handleAction = async (data: string) => {
    const [_id, actionType] = data.split("-");
    console.log(_id, actionType);
    if (actionType === "delete") {
      const result = await deleteBook(_id);
      console.log(result);
    } else {
      navigate(`/admin/update-book/${_id}`);
    }
  };
  const handleChangeOrderStatus = async (data: string) => {
    // console.log(data);
    const [_id, status] = data.split("-");
    // console.log(_id, actionType);
    let result;
    if (status !== "Paid") {
      result = await updateOrderStatus({ _id, status });
    } else {
      const orderId = _id;
      result = await verifyOrder(orderId);
    }
    console.log(result);
  };
  console.log(Orders);
  return (
    <section className="mt-3 ml-3">
      <ul className="flex gap-3 bg-gray-100 rounded-xl p-1 overflow-hidden">
        <li
          id="manageUser"
          className={`tab ${
            activeTab === "manageUser"
              ? "text-white font-bold bg-[#1677FF]"
              : "text-gray-600 font-semibold"
          } rounded-xl text-center text-sm py-2.5 px-4 tracking-wide cursor-pointer`}
          onClick={() => handleTabClick("manageUser")}
        >
          Manage User
        </li>
        <li
          id="manageProducts"
          className={`tab ${
            activeTab === "manageProducts"
              ? "text-white font-bold bg-[#1677FF]"
              : "text-gray-600 font-semibold"
          } rounded-xl text-center text-sm py-2.5 px-4 tracking-wide cursor-pointer`}
          onClick={() => handleTabClick("manageProducts")}
        >
          Manage Products
        </li>
        <li
          id="manageOrder"
          className={`tab ${
            activeTab === "manageOrder"
              ? "text-white font-bold bg-[#1677FF]"
              : "text-gray-600 font-semibold"
          } rounded-xl text-center text-sm py-2.5 px-4 tracking-wide cursor-pointer`}
          onClick={() => handleTabClick("manageOrder")}
        >
          Manage Order
        </li>
      </ul>
      {/* Manage User */}
      <div
        className={`tab-content bg-white px-8 py-4 rounded-md   mt-8 ${
          activeTab === "manageUser" ? "block" : "hidden"
        }`}
      >
        <div className="container px-4 mx-auto">
          <p className="text-[18px] mb-4">Manage User (15)</p>
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          User Status
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Joined Date
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Name
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Email
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Role
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {Users?.data?.map((user) => (
                        <tr key={user.id}>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                                user.activity === "activated"
                                  ? "bg-emerald-100/60 text-emerald-500"
                                  : "bg-red-100/60 text-red-500"
                              }`}
                            >
                              <h2 className="text-sm font-normal">
                                {user.activity.toUpperCase()}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {moment(user.createdAt).format("YYYY-MM-DD")}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                                  {user.name}
                                </h2>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              {user.email}
                            </p>
                          </td>
                          <td
                            className={`px-4 py-4 text-sm whitespace-nowrap ${
                              user.role === "admin"
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {user.role.toUpperCase()}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <Button
                                onClick={async () =>
                                  await activateUser(user._id)
                                }
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                              >
                                Activate
                              </Button>
                              <Button
                                onClick={async () =>
                                  await deactivateUser(user._id)
                                }
                                className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                              >
                                Deactivate
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Products */}
      <div
        className={`tab-content bg-white px-8 py-4 rounded-md   mt-8 ${
          activeTab === "manageProducts" ? "block" : "hidden"
        }`}
      >
        <div className="container px-4 mx-auto">
          <p className="text-[18px] mb-4">Manage Products (11)</p>
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Title
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Author
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Category
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Price
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Quantity
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <span className="">In Stock</span>
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <span className="">Actions</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {Books &&
                        Books?.data?.map(
                          ({
                            title,
                            author,
                            category,
                            price,
                            quantity,
                            inStock,
                            _id,
                          }: IResponseBook) => (
                            <tr key={_id}>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                  <span>{title}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {author}
                              </td>
                              <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div
                                  className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 `}
                                >
                                  <h2 className="text-sm font-normal">
                                    {category}
                                  </h2>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <span>{price}</span>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {quantity}
                              </td>
                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">
                                  {inStock ? "Yes" : "No"}
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <Select
                                  defaultValue="Edit"
                                  style={{ width: 120 }}
                                  onChange={handleAction}
                                  options={[
                                    { value: `${_id}-update`, label: "Edit" },
                                    { value: `${_id}-delete`, label: "Delete" },
                                  ]}
                                />
                              </td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Order */}
      <div
        className={`tab-content bg-white px-8 py-4 rounded-md  mt-8 ${
          activeTab === "manageOrder" ? "block" : "hidden"
        }`}
      >
        <div className="container px-4 mx-auto">
          <p className="text-[18px] mb-4">Manage Order (20)</p>
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Order ID
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Customer Email
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Order Status
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Total Price
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Ordered At
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <span className="">Transaction Method</span>
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <span className="">Change Status</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {Orders?.data?.map(
                        ({
                          user,
                          _id,
                          status,
                          totalPrice,
                          createdAt,
                          transaction,
                        }: TransactionDetails) => (
                          <tr key={_id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <span>{transaction?.id}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {user.email}
                            </td>
                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                              <div
                                className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 `}
                              >
                                <h2 className="text-sm font-normal">
                                  {status || transaction?.transactionStatus}
                                </h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <span>${totalPrice}</span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {moment(createdAt).format("YYYY-MM-DD")}
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                  {transaction?.method}
                                </button>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <Select
                                defaultValue={
                                  status || transaction?.transactionStatus
                                }
                                value={status || transaction?.transactionStatus}
                                style={{ width: 120 }}
                                onChange={(data) =>
                                  handleChangeOrderStatus(data)
                                }
                                options={[
                                  {
                                    value: `${_id}-Completed`,
                                    label: "Completed",
                                  },
                                  { value: `${_id}-Shipped`, label: "Shipped" },
                                  {
                                    value: `${transaction?.id}-Paid`,
                                    label: "Paid",
                                    disabled: status == "Paid",
                                  },
                                ]}
                              />
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageAdmin;
