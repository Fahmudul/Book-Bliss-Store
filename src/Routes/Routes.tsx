import { RouteObject, createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AdminRoutes from "./AdminRoutes";
import PublicRoute from "../components/RouteComponents/PublicRoute";
import PrivateRoute from "../components/RouteComponents/PrivateRoute";
import SingleBook from "../Pages/Books/Single Book/SingleBook";
import DashboardLayout from "../components/Layout/DashboardLayout";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import AllBooks from "../Pages/Books/All Books/AllBooks";
import CheckoutPage from "../Pages/CheckOut/CheckOut";
import OrderConfirmation from "../Pages/OrderConfirmation/OrderConfirmation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "books/:id",
        element: <SingleBook />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "order-confirmation",
        element: <OrderConfirmation />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <DashboardLayout />
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
