import { Checkbox, CheckboxProps } from "antd";
import { useGetNumberOfCategoriesQuery } from "../../../Redux/Features/Admin/UserManagementApi/bookManagement.api";

const AllBooks = () => {
  const { data: Categories } = useGetNumberOfCategoriesQuery(undefined);
  console.log(Categories);
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="w-[90%] mx-auto p-6">
      <h1 className="text-center text-3xl font-bold my-5">All Collection</h1>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 border border-red-500 p-5">
          <h3 className="text-2xl font-semibold">Filter</h3>
          <div className="my-3 space-y-3">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Price Range</h4>
              <div className="flex flex-col gap-2 px-2">
                <Checkbox onChange={onChange}>100$ - 200$</Checkbox>
                <Checkbox onChange={onChange}>200$ - 300$</Checkbox>
                <Checkbox onChange={onChange}>300$ - 400$</Checkbox>
                <Checkbox onChange={onChange}>400$ - 500$</Checkbox>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Avaiability</h4>
              <div className="flex flex-col gap-2 px-2">
                <Checkbox onChange={onChange}>In Stock</Checkbox>
                <Checkbox onChange={onChange}>Out of Stock</Checkbox>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Author</h4>
              <div className="flex flex-col gap-2 px-2">
                <Checkbox onChange={onChange}>Author 1</Checkbox>
                <Checkbox onChange={onChange}>Author 2</Checkbox>
                <Checkbox onChange={onChange}>Author 3</Checkbox>
                <Checkbox onChange={onChange}>Author 4</Checkbox>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Category</h4>
              <div className="flex flex-col gap-2 px-2">
                {Categories?.data?.map((category) => (
                  <Checkbox key={category._id} onChange={onChange}>
                    {category._id}
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 border border-red-500"></div>
      </div>
    </div>
  );
};

export default AllBooks;
