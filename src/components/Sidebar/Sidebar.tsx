import React from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import sideBarGenerator from "../../Utils/sideBarGenerator";
import AdminRoutes from "../../Routes/AdminRoutes";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const sideBarItems = sideBarGenerator(AdminRoutes);
  const currentPath = location.pathname.split("/").pop(); // Get the last part of the URL
  const defaultKey = AdminRoutes.find(
    (route) => route.path === currentPath
  )?.path;
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ position: "sticky", height: "100vh", top: 0 }}
    >
      <div
        style={{
          height: "32px",
          margin: "16px",
          color: "#fff",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Fahmudul Hassan</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[defaultKey || "dashboard"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
