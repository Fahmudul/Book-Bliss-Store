import { NavLink, useNavigate } from "react-router-dom";
// import DrawerComponent from "../Drawer/Drawer";
import { FaOpencart, FaUserCircle } from "react-icons/fa";
import { MdFavorite, MdCompareArrows } from "react-icons/md";
import { Button, Card, Popconfirm, PopconfirmProps, message } from "antd";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { getUser, logOut } from "../../Redux/Features/Auth/authSlice";
import { getCart } from "../../Redux/Features/Orders/cartSlice";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(getCart);
  // console.log(items);
  const [showCartModal, setShowCartModal] = useState(false);
  const handleCartModal = () => {};
  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const totalPrice = items.reduce((total, item) => total + item.totalPrice, 0);
  return (
    <div className="">
      <div className="h-24  flex justify-between lg:max-w-[80%] mx-auto items-center">
        <div className="flex gap-3 ">
          <div className="relative">
            <Popconfirm
              title="Your Cart"
              placement="leftBottom"
              description={
                <div className=" w-[250px]">
                  {items.map((item, idx) => (
                    <CartModal key={idx} product={item} />
                  ))}
                  <div className="w-full mt-2 flex justify-end">Total:{totalPrice}</div>
                </div>
              }
              onCancel={cancel}
              onConfirm={() => navigate("/checkout")}
              okText="Checkout"
              cancelText="No"
            >
              <button>
                <FaOpencart className="text-2xl hover:text-red-500 transition-all duration-300" />
              </button>
            </Popconfirm>
            <span className="w-3 h-3 -right-3 -top-1 rounded-full bg-[#e12503] absolute text-white text-[7px] text-center">
              {items.length}
            </span>
          </div>
          <MdFavorite className="text-2xl hover:text-red-500 transition-all duration-300" />
          <MdCompareArrows className="text-2xl hover:text-red-500 transition-all duration-300" />
        </div>
        <div className="text-2xl font-bold">
          BOOK <span className="text-[#e12503]">BLISS</span>
        </div>
        <div className="flex gap-3 items-center ">
          <FaUserCircle className="text-2xl" />
          <Button
            onClick={() => {
              return user ? dispatch(logOut()) : navigate("/login");
            }}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
      <div className=" min-h-16 flex items-center bg-[#e12503]">
        <ul className="flex gap-8 justify-center w-full [&>*]:text-white [&>*]:font-semibold [&>li:first-child]:text-white/70">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-class" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-books"
              className={({ isActive }) => (isActive ? "active-class" : "")}
            >
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-class" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/authors">Authors</NavLink>
          </li>
        </ul>
      </div>
      {/* <DrawerComponent /> */}
    </div>
  );
};

export default Navbar;
export const CartModal = ({ product }) => {
  return (
    <div className="flex items-center  gap-4 mt-1">
      <img
        src={"/assets/img1.png"}
        alt={"image"}
        className="w-8 h-8 object-cover rounded-lg shadow-md"
      />
      <div className="flex items-center gap-2">
        <h3 className="text-[12px] font-semibold">{product.title}</h3>
        <p className="text-gray-600">
          x <span className="font-medium">{product.quantity}</span>
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          Price:{" "}
          <span className="font-semibold text-green-600">
            ${product.totalPrice}
          </span>
        </p>
      </div>
    </div>
  );
};
