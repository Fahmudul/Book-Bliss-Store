import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useAppDispatch } from "../../Redux/hook";
import { logOut } from "../../Redux/Features/Auth/authSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button type="primary" onClick={() => dispatch(logOut())}>
            Logout{" "}
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
