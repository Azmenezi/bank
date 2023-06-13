import React, { useContext, useState } from "react";
import chip from "../images/chip.png";
import logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getBalance } from "../API/auth";
import { deposit, withdraw } from "../API/transactions";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
const TranOptions = ({ userInfo }) => {
  const [user, setUser] = useContext(UserContext);
  const [balanceInfo, setBalanceInfo] = useState();
  const {
    data: balance,
    isLoading: balanceLoading,
    isError: balanceError,
  } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });
  if (balanceLoading) {
    console.log("loading");
  }

  if (balanceError) {
    console.log("Error");
  }

  const { mutate: depositFn } = useMutation({
    mutationFn: (amount) => deposit(amount),
  });

  const { mutate: withdrawFn } = useMutation({
    mutationFn: (amount) => withdraw(amount),
  });
  const handleChange = (e) => {
    setBalanceInfo(e.target.value);
  };

  const handleFormSubmit = (e, actionType) => {
    e.preventDefault();

    if (Number(balanceInfo) <= 0) {
      alert("The deposit amount should be greater than 0");
      return;
    }

    if (actionType === "DEPOSIT") {
      depositFn(balanceInfo);
    } else if (actionType === "WITHDRAW") {
      if (Number(balanceInfo) > Number(balance.balance)) {
        alert("Insufficient balance for withdrawal!");
        return;
      }
      withdrawFn(balanceInfo);
    }
    {
    }
  };
  // console.log(balanceInfo);
  // console.log(balance.balance);
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Navbar />
      <div className="main-big-container">
        <div class="container">
          <div class="top">
            <div class="logo">
              <img src={logo} />
              <p>Master card</p>
            </div>
            <div class="chip">
              <img src={chip} />
            </div>
          </div>
          <div class="bottom">
            <div class="number">
              <h3>Card Number</h3>
              <p>1234 5678 9012 3456</p>
            </div>
            <div class="nameDate">
              <p class="name">{userInfo}</p>
              <div class="date">
                <p class="valid">Valid Thru</p>
                <p>18/24</p>
              </div>
            </div>
          </div>
        </div>
        <div className="With-Depo">
          <div className="mb-4">
            <label htmlFor="Enter the blance to deposit/withdraw" className="">
              balance
            </label>
            <input
              type="balance"
              name="balance"
              id="balance"
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <button
            className="with-depo-btn"
            onClick={(e) => handleFormSubmit(e, "WITHDRAW")}
          >
            WITHDRAW
          </button>
          <button
            className="with-depo-btn"
            onClick={(e) => handleFormSubmit(e, "DEPOSIT")}
          >
            DEPOSIT
          </button>
        </div>
      </div>
    </>
  );
};

export default TranOptions;
