import "../styles.css";
import "../search.css";
import React, { Component, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/logo";
import SearchBox from "../components/searchbox";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/profilemenudrop";
import { useHistory } from "react-router-dom";
import { Content } from "../data/content";
import MobileSearch from "../components/mobileSearch";

function Home() {
  const history = useHistory();

  // Website search
  const searchWebsite = () => {
    let path = document.querySelector(".search-input").value;
    if (path) {
      history.push(path);
    }
  };

  useEffect(() => {
    let inputField = document.querySelector(".search-input");
    inputField.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // I'm Feeling Lucky search
  function feelingLucky() {
    let path = document.querySelector(".search-input").value;
    /* Get all elements matching the search term */
    const item = Content.filter((item) => item.category === path);
    // Get the link of the first match
    // Redirect to first match, if it exists
    if (item[0]) {
      const url = item[0].link;
      window.location.href = url;
    } else if (path) {
      history.push(path);
    }
  }

  return (
    <div className="home main">
      <div className="top-menu">
        <span className="top-menu-item">
          {" "}
          <a href="mailto:enjeckc1e0@gmail.com"> Email </a>
        </span>
        <span className="top-menu-item">
          {" "}
          <a href="https://github.com/enjeck"> GitHub </a>
        </span>
        <BoxMenuDrop />
        <ProfileMenuDrop />
      </div>
     <div className="flex-center">
      <div className="search-container">
        <div className="frontpage-logo">
          <Logo />
        </div>
        <SearchBox />
        <div className="search-btns">
          <input
            className="search-btn sw"
            type="button"
            value="Search Website"
            onClick={searchWebsite}
          />
          <input
            className="search-btn ifl"
            type="button"
            value="I'm Feeling Lucky"
            onClick={feelingLucky}
          />
        </div>
      </div>
      </div>

      <footer className="footer">
        <div className="country">
          Cameroon
        </div>
        <div className="footer-links">
          <div className="footer-links-section">
            <a href="/#/about"> About </a>
            <a href="/#/projects"> Projects </a>
            <a href="/#/blog"> Blog</a>
            <a href="mailto:enjeckc1e0@gmail.com"> Email </a>
          </div>
          <div className="footer-links-section">
            <a href="https://github.com/enjeck"> GitHub </a>
            <a href="https://www.linkedin.com/in/c1e0/"> LinkedIn </a>
            <a href="mailto:enjeckc1e0@gmail.com"> Email </a>
            {/* <div className="settings-dropdown">
              <button className="settings-dropbtn"> Settings </button>
              <div className="settings-dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
                <a className="dark-mode-btn" href="/">
                  Link 4
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
