import React from "react";
import "./header.css";
import Logo from "./logo";
import TopSearchBox from "./topSearchbox";
import BoxMenuDrop from "./boxmenudrop";
import ProfileMenuDrop from "./profilemenudrop";

const Header = () => {
  return (
    <div className="menu">
      <div className="menu-section">
        <a href="/" style={{ textDecoration: "none" }}>
          <Logo />
        </a>
        <div className="topmenu-menu-search menu-search">
          <TopSearchBox />
        </div>
      </div>
      <div className="menu-section">
        <div className="header-profile-icons">
          <BoxMenuDrop />
          <ProfileMenuDrop />
        </div>
      </div>
    </div>
  );
};

export default Header;
