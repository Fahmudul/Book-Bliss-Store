import img1 from "/assets/img1.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { Link, Links, useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="group relative flex justify-center items-center flex-col">
      <div className="relative overflow-hidden">
        <img
          src={img1}
          className="w-full group-hover:opacity-65 transition-transform duration-300 group-hover:scale-105"
          alt="Product"
        />
        <div className="absolute inset-0 flex flex-col justify-center right-2 items-end gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <FaShoppingCart
            size={35}
            className="text-3xl text-white bg-[#E12503] p-2 rounded-full shadow-md cursor-pointer"
          />
          <GiSelfLove
            size={35}
            className="text-3xl text-white bg-[#E12503] p-2 rounded-full shadow-md cursor-pointer"
          />
          <Link to={"/"}>
            <FaRegEye
              size={35}
              title="View Product"
              className="text-3xl text-white bg-[#E12503] p-2 rounded-full shadow-md cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="text-center space-y-2 mt-5">
        <h2 className="text-xl text-[#888888] m-0">Sage Isaias</h2>
        <p className="text-2xl font-medium m-0">Girls at the Golden City</p>
        <p className="text-xl text-[#888888] m-0">Tk 1,480.47</p>
      </div>
    </div>
  );
};

export default Card;
