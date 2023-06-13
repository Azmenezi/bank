import React, { useContext, useState } from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { checkToken, register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import UserSvg from "../SVGs/UserSvg";
import LockSvg from "../SVGs/LockSvg";

export const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const {
    mutate: registerFn,
    isError,
    error,
  } = useMutation({
    mutationFn: () => register(userInfo),
    onSuccess: () => setUser(checkToken()),
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerFn();
    console.log(userInfo);
    // navigate("/home");
  };
  if (user) {
    return <Navigate to="/home" />;
  }
  if (isError) {
    return console.log("Errooor");
  }
  return (
    <div className="main-big-container">
      <div className="main-container">
        <div className="registerText">
          {" "}
          <h1>REGISTER</h1>
        </div>
        <div>
          <form onSubmit={handleFormSubmit}>
            {/* <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Profile Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit">Register</button>
          </div> */}
          </form>
          <Modal.Body>
            <form onSubmit={handleFormSubmit}>
              <div>
                <div>
                  <InputGroup className="usernameSignUpInput">
                    <InputGroup.Text></InputGroup.Text>
                    <UserSvg />
                    <FormControl
                      placeholder=" username"
                      name="username"
                      type="text"
                      onChange={handleChange}
                      style={{ width: "300px", height: "25px" }}
                    />
                  </InputGroup>
                  <InputGroup className="passwordSignUpInput">
                    <InputGroup.Text></InputGroup.Text>
                    <LockSvg />
                    <FormControl
                      name="password"
                      type="password"
                      onChange={handleChange}
                      placeholder="Password"
                      style={{
                        width: "300px",
                        height: "25px",
                        backgroundColor: "",
                      }}
                    />
                  </InputGroup>
                  <div>
                    <label htmlFor="image">Avatar </label>
                    <input
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        color: "black",
                        cursor: "pointer",
                      }}
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="sign-up-btn">
                <Button
                  className="Button_"
                  variant="outline-dark"
                  type="submit"
                  style={{
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                  onClick={handleFormSubmit}
                >
                  SIGN UP
                </Button>
              </div>
            </form>
          </Modal.Body>
        </div>
      </div>
    </div>
  );
};
