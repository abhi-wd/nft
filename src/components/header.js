import React from "react";
import "./header.css";
import logo from "../assests/header/cryptopunk-logo.png";
import searchIcon from "../assests/header/search.png";
import themeSwitchIcon from "../assests/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={logo} className="logo" alt="Logo.png" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, Item or User..."
        />
      </div>

      <div className="headerItem">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerAction">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} />
        </div>
      </div>

      <div className="loginButton"> GET IN</div>
    </div>
  );
};

export default Header;
