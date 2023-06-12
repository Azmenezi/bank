import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
export const MyAccount = () => {
  const [user, setUser] = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Navbar />
      
    </div>
  );
};
