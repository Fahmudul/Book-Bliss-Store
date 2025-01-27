import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AdminRoutes from "./AdminRoutes";
import MainLayout from "../components/Layout/MainLayout";
import PublicRoute from "../components/RouteComponents/PublicRoute";
import PrivateRoute from "../components/RouteComponents/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: AdminRoutes as RouteObject[],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
]);

export default router;
