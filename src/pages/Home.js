import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {
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

export default Home;
