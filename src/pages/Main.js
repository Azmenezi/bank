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
        <h3 className="createAccount">CREATE AN ACCOUNT</h3>
        <button className="main-buttons" onClick={() => navigate("/login")}>
          LOG IN
        </button>

        <button className="main-buttons" onClick={() => navigate("/register")}>
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Main;
