import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
const Main = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  if (user) {
    return <Navigate to="/home" />;
  }
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
