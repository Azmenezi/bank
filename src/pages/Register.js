import React, { useContext, useState } from "react";
import { checkToken, register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UseContext";
import { Navigate } from "react-router-dom";
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
    // Add register logic here
    registerFn();
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="main-big-container">
      <div className="main-container">
        <div className="registerText">REGISTER</div>

        <input></input>
      </div>
    </div>
  );
};
