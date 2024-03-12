// import { useState } from "react"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // console.log("children=======>",children)
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
