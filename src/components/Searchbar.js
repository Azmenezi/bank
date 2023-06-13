import React, { useState } from "react";

export const Searchbar = () => {
  const [userInfo, setUserInfo] = useState();
  const handleChange = (e) => {
    setUserInfo(e.target.value);
  };
  console.log(userInfo);
  return (
    <div className="containerSearch">
      <input type="checkbox" id="checkbox"></input>
      <div className="search-box">
        <input
          type="text"
          placeholder="search..."
          onChange={handleChange}
        ></input>
        <label for="checkbox" className="icon"></label>
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};
