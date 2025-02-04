import { Button } from "antd";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { IResponseBook } from "../../Types/global";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

const NewArrival = () => {
  const { data: AllBooks } = useGetAllBooksQuery({ limit: 8 });
  return (
    <section className="my-14 px-8 w-[90%] mx-auto">
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-3xl text-center font-semibold">NEW ARRIVALS</h2>
        <div className="w-20 h-[5px] bg-[#E12503]"></div>
      </div>
      <div className="grid grid-cols-2 lg:flex  md:grid-cols-2  items-center gap-2 my-14 justify-center">
        <div className="w-max px-2 lg:px-5 py-3 bg-[#E12503] cursor-pointer lg:text-xl text-base text-white  shadow-xl">
          All
        </div>
        <div className="w-max px-2 lg:px-5 py-3 bg-[#e9e9e9] cursor-pointer lg:text-xl text-base  shadow-xl">
          Cook Book
        </div>
        <div className="w-max px-2 lg:px-5 py-3 bg-[#e9e9e9] cursor-pointer lg:text-xl text-base   shadow-xl">
          History
        </div>
        <div className="w-max px-2 lg:px-5 py-3 bg-[#e9e9e9] cursor-pointer lg:text-xl text-base shadow-xl">
          Fantacy
        </div>
        <div className="w-max px-2 lg:px-5 py-3 bg-[#e9e9e9] cursor-pointer lg:text-xl text-base   shadow-xl">
          Romance
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-x-6 gap-y-8">
        {/* Card 1 */}
        {AllBooks?.data?.length > 0 ? (
          AllBooks?.data?.map((book: IResponseBook) => (
            <Card key={book._id} book={book} />
          ))
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
      <div className="flex justify-center items-center my-5">
        <Link to="/all-books">
          <Button className="bg-[#E12503] text-white  shadow-xl">
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrival;
