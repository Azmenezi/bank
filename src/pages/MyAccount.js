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
    </div>
  );
};
