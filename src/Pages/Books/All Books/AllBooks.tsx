import { Button, Checkbox, CheckboxProps, Popconfirm, Select } from "antd";
import {
  useGetAllBooksQuery,
  useGetNumberOfCategoriesQuery,
} from "../../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { PiDotsNineFill } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";
import Card from "../../../components/Card/Card";
import { useState, useEffect } from "react";
import Search from "antd/es/input/Search";
interface IParams {
  [key: string]: string[] | undefined | string;
}
const AllBooks = () => {
  const [params, setParams] = useState<IParams>({});
  const { data: Categories } = useGetNumberOfCategoriesQuery(undefined);
  const { data: AllBooks, refetch } = useGetAllBooksQuery(params);
  const [authorList, setAuthorList] = useState<string[]>([]);
  useEffect(() => {
    if (AllBooks?.data) {
      let authorListFromBookList = AllBooks.data.map((book) => book?.author);
      authorListFromBookList = new Set(authorListFromBookList);
      setAuthorList(Array.from(authorListFromBookList));
    }
  }, []);
  console.log(authorList);
  useEffect(() => {
    refetch();
  }, [params, refetch]);

  const onChange: CheckboxProps["onChange"] = (e) => {
    const [name, value] = e.target.value.split("-");
    // console.log(name, value);
    if (name === "range") {
      if (e.target.checked) {
        const [min, max] = value.split(",");
        setParams((prev) => ({
          ...prev,
          minPrice: min,
          maxPrice: max,
        }));
      } else {
        setParams((prev) => ({
          ...prev,
          minPrice: undefined,
          maxPrice: undefined,
        }));
      }
    }
    setParams((prev) => {
      const newParams = { ...prev };

      if (e.target.checked && name !== "range") {
        newParams[name] = [...(newParams[name] || []), value];
      } else {
        if (name !== "range") {
          newParams[name] = (newParams[name] || []).filter(
            (item) => item !== value
          );
          if (newParams[name].length === 0) {
            delete newParams[name];
          }
        }
      }

      return { ...newParams };
    });
  };

  return (
    <div className="w-[90%] mx-auto p-6">
      <h1 className="text-center text-3xl font-bold my-5">All Collection</h1>
      <div className="grid grid-cols-4 gap-6">
        {/* Filter Options */}
        <div className="col-span-1  p-5">
          <h3 className="text-2xl font-semibold mb-2">Filter</h3>
          <hr />
          <div className="my-3 space-y-3">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Price Range</h4>
              <div className="flex flex-col gap-2 px-2">
                <Checkbox onChange={onChange} value={"range-100,200"}>
                  100$ - 200$
                </Checkbox>
                <Checkbox onChange={onChange} value={"range-200,300"}>
                  200$ - 300$
                </Checkbox>
                <Checkbox onChange={onChange} value={"range-300,400"}>
                  300$ - 400$
                </Checkbox>
                <Checkbox onChange={onChange} value={"range-400,500"}>
                  400$ - 500$
                </Checkbox>
              </div>
            </div>
            <hr />

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Availability</h4>
              <div className="flex flex-col gap-2 px-2">
                <Checkbox onChange={onChange} value={"inStock-" + true}>
                  In Stock
                </Checkbox>
                <Checkbox onChange={onChange} value={"inStock-" + false}>
                  Out of Stock
                </Checkbox>
              </div>
            </div>
            <hr />

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Author</h4>
              <div className="flex flex-col gap-2 px-2">
                {authorList?.map((author) => (
                  <Checkbox onChange={onChange} value={"author-" + author}>
                    {author}
                  </Checkbox>
                ))}
              </div>
            </div>
            <hr />

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Category</h4>
              <div className="flex flex-col gap-2 px-2">
                {Categories?.data?.map((category) => (
                  <Checkbox
                    key={category._id}
                    onChange={onChange}
                    value={`category-${category._id}`}
                  >
                    {category._id}
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Search And Sort */}
        <div className="col-span-3">
          <div className="h-14 w-full border border-gray-500/20 flex justify-between  items-center">
            <div className="mx-3 ">
              <Search
                placeholder="Search Book e.g title"
                onSearch={(value) => setParams({ searchTerm: value })}
                style={{ width: 200 }}
              />
            </div>
            <div className="flex justify-between items-center gap-3 mx-3 ">
              <Select
                style={{ borderRadius: "5px", width: "120px" }}
                defaultValue="Sort-by"
                options={[
                  { value: "h-t-l", label: "High to Low" },
                  { value: "l-t-h", label: "Low to High" },
                ]}
              />
              <span>22 Books</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 my-4">
            {AllBooks?.data?.map((book) => (
              <Card key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
