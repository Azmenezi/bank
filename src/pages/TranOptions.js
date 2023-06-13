import React from "react";
import chip from "../images/chip.png";
import logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const TranOptions = ({ userInfo }) => {
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
          <button className="with-depo-btn">WITHDRAW</button>
          <button className="with-depo-btn">DEPOSIT</button>
        </div>
      </div>
    </>
  );
};

export default TranOptions;
