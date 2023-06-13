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
        <NavLink to="/my-account">
          <div>My Account</div>
        </NavLink>

        <button
          className="logout-"
          style={{
            cursor: "pointer",
            background: "#131c20",
            color: "white",
            width: "70px",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={logOutFn}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
