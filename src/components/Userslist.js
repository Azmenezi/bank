import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../API/auth";
import { useNavigate } from "react-router-dom";

const Userlist = () => {
  const navigate = useNavigate();
  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  const renderUsers = () => {
    if (usersLoading) {
      return <div>Loading...</div>;
    }

    if (usersError) {
      return <div>Error loading users!</div>;
    }

    return users.map((user) => {
      return (
        <button className="accInfo" onClick={() => navigate("/user-details/" + user._id)}>
          <h4>username: {user.username}</h4>
          <h3> Account: {user.account}</h3>
        </button>
      );
    });
  };
  return <div className="users-myaccount">{renderUsers()}</div>;
};

export default Userlist;
