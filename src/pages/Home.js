import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { checkToken } from "../API/auth";

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    setUser(checkToken());
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Navbar />
      <div className="main-big-container">
        <h1 className="hometitle">BANK</h1>
      </div>
    </div>
  );
};

export default Home;
