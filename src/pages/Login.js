import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { checkToken, login } from "../API/auth";
import { useState } from "react";
import UserSvg from "../SVGs/UserSvg";
import LockSvg from "../SVGs/LockSvg";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import UserContext from "../context/UserContext";

export const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: loginFn } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => setUser(checkToken()),
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginFn();
  };

  if (user) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="main-big-container">
      <div className="main-container">
        <div className="registerText">
          <h1>LOG IN</h1>
        </div>

        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <InputGroup className="usernameSignUpInput">
              <InputGroup.Text></InputGroup.Text>
              <UserSvg />
              <FormControl
                placeholder=" username"
                name="username"
                type="text"
                onChange={handleChange}
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
              />
            </InputGroup>

            <Button
              className="Button_"
              variant="outline-dark"
              type="submit"
              style={{
                cursor: "pointer",
              }}
            >
              Log In
            </Button>
          </form>
        </Modal.Body>
      </div>
    </div>
  );
  //
};
