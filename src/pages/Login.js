import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../API/auth";
import { useState } from "react";
import UserSvg from "../SVGs/UserSvg";
import LockSvg from "../SVGs/LockSvg";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";

export const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const log_in = useMutation(() => login(userInfo), {
    onSuccess: () => queryClient.invalidateQueries(userInfo),
  });

  if (!userInfo) {
    return navigate("/");
  }

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    log_in.mutate();
    // Add login logic here
  };
  return (
    <div className="main-big-container">
      <div className="main-container">
        <div className="registerText">
          {" "}
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
              SIGN UP
            </Button>
          </form>
        </Modal.Body>
      </div>
    </div>
  );
  //
};
