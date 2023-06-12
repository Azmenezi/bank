import React, { useContext, useState } from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { checkToken, register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import UserSvg from "../SVGs/UserSvg";
import LockSvg from "../SVGs/LockSvg";
export const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const { mutate: registerFn } = useMutation({
    mutationFn: () => register(userInfo),
    onSuccess: () => setUser(checkToken()),
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerFn();
    console.log(userInfo);
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="main-big-container">
      <div className="main-container">
        <div className="registerText">
          {" "}
          <h1>REGISTER</h1>
        </div>
        {/* <form onSubmit={handleFormSubmit}>
          <div>
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
          </div>
        </form> */}
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
};
