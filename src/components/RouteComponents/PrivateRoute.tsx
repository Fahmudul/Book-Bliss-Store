import React from "react";
import { useAppSelector } from "../../Redux/hook";
import { getUser } from "../../Redux/Features/Auth/authSlice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(getUser);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
