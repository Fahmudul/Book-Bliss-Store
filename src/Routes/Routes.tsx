import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AdminRoutes from "./AdminRoutes";
import MainLayout from "../components/Layout/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin",
    element: <MainLayout />,
    children: AdminRoutes,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
