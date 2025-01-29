import { Button } from "antd";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <section className="my-14 px-8 w-[90%] mx-auto">
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-3xl text-center font-semibold">NEW ARRIVALS</h2>
        <div className="w-20 h-[5px] bg-[#E12503]"></div>
      </div>
      <div className="flex items-center gap-4 my-14 justify-center">
        <div className="w-max px-5 py-3 bg-[#E12503] cursor-pointer text-white text-xl shadow-xl">
          All
        </div>
        <div className="w-max px-5 py-3 bg-[#e9e9e9] cursor-pointer  text-xl shadow-xl">
          Cook Book
        </div>
        <div className="w-max px-5 py-3 bg-[#e9e9e9] cursor-pointer  text-xl shadow-xl">
          History
        </div>
        <div className="w-max px-5 py-3 bg-[#e9e9e9] cursor-pointer text-xl shadow-xl">
          Fantacy
        </div>
        <div className="w-max px-5 py-3 bg-[#e9e9e9] cursor-pointer  text-xl shadow-xl">
          Romance
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-8">
        {/* Card 1 */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
