import React from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main-big-container">
      <div className="main-container">
        <button className="main-buttons" onClick={() => navigate("/login")}>
          Login
        </button>

        <button className="main-buttons" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Main;
