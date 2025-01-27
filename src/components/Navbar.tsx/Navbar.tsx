import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
// import DrawerComponent from "../Drawer/Drawer";
import { FaOpencart, FaUserCircle } from "react-icons/fa";
import { MdFavorite, MdCompareArrows } from "react-icons/md";
import { Button } from "antd";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="h-24  flex justify-between lg:max-w-[80%] mx-auto items-center">
        <div className="flex gap-3 ">
          <FaOpencart className="text-2xl hover:text-red-500 transition-all duration-300" />
          <MdFavorite className="text-2xl hover:text-red-500 transition-all duration-300" />
          <MdCompareArrows className="text-2xl hover:text-red-500 transition-all duration-300" />
        </div>
        <div className="text-2xl font-bold">
          BOOK <span className="text-[#e12503]">BLISS</span>
        </div>
        <div className="flex gap-3 items-center ">
          <FaUserCircle className="text-2xl" />
          <Button onClick={() => navigate("/login")}>Login</Button>
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
