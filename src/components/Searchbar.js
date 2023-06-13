import React from "react";

export const Searchbar = () => {
  return (
    <div className="containerSearch">
      <input type="checkbox" id="checkbox"></input>
      <div className="search-box">
        <input type="text" placeholder="search..."></input>
        <label for="checkbox" className="icon"></label>
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};
