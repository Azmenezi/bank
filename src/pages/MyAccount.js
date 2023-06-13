import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { checkToken, getBalance, getProfile } from "../API/auth";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Userlist from "../components/Userslist";
import { Searchbar } from "../components/Searchbar";
import Transactionslist from "../components/Transactionslist";

export const MyAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    setUser(checkToken());
  }, [user]);

  const {
    data: profile,
    isLoading: profileLoading,
    isError: profileError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  const {
    data: balance,
    isLoading: balanceLoading,
    isError: balanceError,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });

  if (profileLoading || balanceLoading) {
    console.log("loading");
  }

  if (profileError || balanceError) {
    console.log("Error");
  }

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Navbar />

      <div className="acc-big-container">
        <div className="profile-big-container">
          <div className="profile-container">
            <div className="profile">
              <div>
                <img
                  src={`https://coded-projects-api.herokuapp.com${profile?.image}`}
                  className="profile-img"
                />
              </div>
              <div className="userInfoAcc">
                <div className="profile-text">{profile?.username}</div>
                <div className="profile-text">${balance?.balance}</div>
                <button
                  className="tranbutton"
                  onClick={() => {
                    navigate("/tranOptions");
                  }}
                >
                  Transaction
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="account-big-container">
          <div className="account-container">
            <div className="acc-users-text">USERS</div>
            <div className="acc-transations-text">Transactions History</div>
            <div className="users-search"></div>
            <Searchbar />

            <Userlist />
            <Transactionslist />
          </div>
        </div>
      </div>
    </div>
  );
};
//
