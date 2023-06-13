import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import {
  checkToken,
  getBalance,
  getProfile,
  getTransactions,
} from "../API/auth";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Userlist from "../components/Userslist";
import { Searchbar } from "../components/Searchbar";

export const MyAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    setUser(checkToken());
  }, []);

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

  const {
    data: transactions,
    isLoading: transactionsLoading,
    isError: transactionsError,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  if (profileLoading || balanceLoading || transactionsLoading) {
    console.log("loading");
  }

  if (profileError || balanceError || transactionsError) {
    console.log("Error");
  }

  const renderTransactions = () => {
    if (transactionsLoading) {
      return <div>Loading...</div>;
    }

    if (transactionsError) {
      return <div>Error loading transactions!</div>;
    }

    return transactions.map((transaction) => {
      let color;

      switch (transaction.type) {
        case "deposit":
          color = "transactions-myaccount-container green";
          break;
        case "withdraw":
          color = "transactions-myaccount-container red";
          break;
        case "transfer":
          color = "transactions-myaccount-container purple";
          break;
        default:
          color = "transactions-myaccount-container black";
      }

      return (
        <div key={transaction.id} style={{ color }}>
          <div className="transaction-text">
            Transaction Type: {transaction.type}
          </div>
          <div className="transaction-text">Amount: {transaction.amount}</div>
          <div className="transaction-text">Sender: {transaction.senderId}</div>
          <div className="transaction-text">
            Receiver: {transaction.receiverId}
          </div>
          <div className="transaction-text">
            Created At: {transaction.createdAt}
          </div>
          <div className="transaction-text">
            Updated At: {transaction.updatedAt}
          </div>
        </div>
      );
    });
  };
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
                <img src={profile?.image} className="profile-img" />
              </div>
              <div className="userInfoAcc">
                <div className="profile-text">{profile?.username}</div>
                <div className="profile-text">{balance?.balance}</div>
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
        <Searchbar />
        <div className="account-big-container">
          <div className="account-container">
            <div className="acc-users-text">Users</div>
            <div className="acc-transations-text">Transactions History</div>

            <Userlist />
            <div className="transactions-myaccount">{renderTransactions()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
//
