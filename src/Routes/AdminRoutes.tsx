import { ReactNode } from "react";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AddBookToStore from "../Pages/Admin/AddBookToStore";
import { TRoutes } from "../Types/global";

const AdminRoutes: TRoutes[] = [
  {
    index: true,
    name: "Dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    name: "Dashboard",
    element: <AdminDashboard />,
  },
  {
    element: <AddBookToStore />,
    path: "add-book",
    name: "Add New Book",
  },
];

export default AdminRoutes;
