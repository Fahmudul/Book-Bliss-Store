import { Button } from "antd";
import React, { useState } from "react";
import {
  useGetAllUsersQuery,
  useDeactivateUserMutation,
  useActivateUserMutation,
} from "../../Redux/Features/Admin/UserManagementApi/userManagement.api";
import moment from "moment";
const ManageAdmin = () => {
  const [activeTab, setActiveTab] = useState("manageUser");
  const { data: Users } = useGetAllUsersQuery(undefined);
  const [deactivateUser] = useDeactivateUserMutation();
  const [activateUser] = useActivateUserMutation();
  console.log(Users);
  const invoices = [
    {
      id: "#3066",
      date: "Jan 6, 2022",
      status: "Paid",
      statusColor: "text-emerald-500 bg-emerald-100/60",
      customer: {
        name: "Arthur Melo",
        email: "authurmelo@example.com",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      },
      purchase: "Monthly subscription",
    },
    {
      id: "#3065",
      date: "Jan 5, 2022",
      status: "Cancelled",
      statusColor: "text-red-500 bg-red-100/60",
      customer: {
        name: "Andi Lane",
        email: "andi@example.com",
        avatar:
          "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
      purchase: "Monthly subscription",
    },
    {
      id: "#3064",
      date: "Jan 5, 2022",
      status: "Paid",
      statusColor: "text-emerald-500 bg-emerald-100/60",
      customer: {
        name: "Kate Morrison",
        email: "kate@example.com",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      },
      purchase: "Monthly subscription",
    },
  ];
  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId);
  };
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
                      {Users?.data?.map((invoice) => (
                        <tr key={invoice.id}>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                                invoice.activity === "activated"
                                  ? "bg-emerald-100/60 text-emerald-500"
                                  : "bg-red-100/60 text-red-500"
                              }`}
                            >
                              <h2 className="text-sm font-normal">
                                {invoice.activity.toUpperCase()}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {moment(invoice.createdAt).format("YYYY-MM-DD")}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                                  {invoice.name}
                                </h2>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              {invoice.email}
                            </p>
                          </td>
                          <td
                            className={`px-4 py-4 text-sm whitespace-nowrap ${
                              invoice.role === "admin"
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {invoice.role.toUpperCase()}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <Button
                                onClick={async () =>
                                  await activateUser(invoice._id)
                                }
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                              >
                                Activate
                              </Button>
                              <Button
                                onClick={async () =>
                                  await deactivateUser(invoice._id)
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
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />
                            <span>Invoice</span>
                          </div>
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Date
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Status
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Customer
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Purchase
                        </th>
                        <th className="relative py-3.5 px-4">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {invoices.map((invoice) => (
                        <tr key={invoice.id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />
                              <span>{invoice.id}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {invoice.date}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${invoice.statusColor}`}
                            >
                              <h2 className="text-sm font-normal">
                                {invoice.status}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-8 h-8 rounded-full"
                                src={invoice.customer.avatar}
                                alt={invoice.customer.name}
                              />
                              <div>
                                <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                                  {invoice.customer.name}
                                </h2>
                                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  {invoice.customer.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {invoice.purchase}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                Archive
                              </button>
                              <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                Download
                              </button>
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
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />
                            <span>Invoice</span>
                          </div>
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Date
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Status
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Customer
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          Purchase
                        </th>
                        <th className="relative py-3.5 px-4">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {invoices.map((invoice) => (
                        <tr key={invoice.id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />
                              <span>{invoice.id}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {invoice.date}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${invoice.statusColor}`}
                            >
                              <h2 className="text-sm font-normal">
                                {invoice.status}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-8 h-8 rounded-full"
                                src={invoice.customer.avatar}
                                alt={invoice.customer.name}
                              />
                              <div>
                                <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                                  {invoice.customer.name}
                                </h2>
                                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  {invoice.customer.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {invoice.purchase}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                Archive
                              </button>
                              <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                Download
                              </button>
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
    </section>
  );
};

export default ManageAdmin;
