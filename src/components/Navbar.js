import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { checkToken, logout } from "../API/auth";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const logOutFn = () => {
    logout();
    setUser(checkToken());
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <NavLink to="/home">
          <div>Home</div>
        </NavLink>
        <NavLink to="/myaccount">
          <div>My Account</div>
        </NavLink>

        <button onClick={logOutFn}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
