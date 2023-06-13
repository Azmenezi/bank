import React, { useContext, useEffect } from "react";
import { checkToken, getUserId } from "../API/auth";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./Navbar";
import UserContext from "../context/UserContext";

const User = () => {
  const [user, setUser] = useContext(UserContext);
  let { userId } = useParams();
  const {
    data: userElem,
    isLoading: userElemLoading,
    isError: userElemError,
  } = useQuery({
    queryKey: ["userElem"],
    queryFn: () => getUserId(userId),
  });
  console.log(userElem);
  if (userElemLoading) {
    return (
      <div>
        <Navbar />
        <div className="main-big-container">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  if (userElemError) {
    return (
      <div>
        <Navbar />
        <div className="main-big-container">
          <h1>Error loading user! Make sure you are logged in!</h1>
        </div>
      </div>
    );
  }
  if (!userElem) {
    return (
      <div>
        <Navbar />
        <div className="main-big-container">
          <h1>There is no userElem with the id: {userId}</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="main-big-container">
        <div className="main-container">
          <div className="user-container">
            <div className="profile-big-container">
              <div className="profile-container">
                <div className="profile">
                  <div>
                    <img src={userElem.image} className="profile-img" />
                  </div>
                  <div>
                    <div className="profile-text">
                      userElemname: {userElem.userElemname}
                    </div>
                    <div className="profile-text">
                      account number: {userElem.account}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="main-buttons">transfer</button>
        </div>
      </div>
    </div>
  );
};

export default User;
