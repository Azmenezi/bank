<<<<<<< HEAD
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../API/auth";

export const MyAccount = () => {
  const users = useQuery(["users"], () => getAllUsers());
  return (
    <div>
      <Navbar />
      <div className="acc-big-container">
        <div className="accInfo">
          <div className="usersIcon">
            <img width="100%" hight="100%" />
          </div>
          <h4>username</h4>
          <h3>balance</h3>
        </div>
      </div>
=======
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
      
>>>>>>> 7261a3629bec1a977fe7f5dca506b5f08d912be1
    </div>
  );
};
