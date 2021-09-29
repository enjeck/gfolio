import "./boxmenudrop.css";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/e-logo.png"
import li from "../images/linkedIn-icon.png"
import gh from "../images/github-icon.png"
import news from "../images/newspaper.png"
import suitcase from "../images/suitcase.png"
import email from "../images/gmail-icon.png"
import img from "../images/image.png"
import about from "../images/info.png"


const BoxMenuDrop = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setActive(!!isActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef);

  return (
    <div className="dropdown" onClick={handleToggle} ref={wrapperRef}>
      <FontAwesomeIcon className="fas fa-th dropbtn" icon={faTh} />
      <div
        id="drop"
        className={
          isActive
            ? "dropdown-content-cont dropdown-hide"
            : "dropdown-content-cont dropdown-show"
        }
      >
        <div className="drop-item">
          <a className="drop-link" href="/">
            <img
              src={logo}
              alt=""
            />
            <p> Search </p>
          </a>
          <a className="drop-link" href="/">
            <img
              src={about}
              alt=""
            />
            <p> About </p>
          </a>
          <a className="drop-link" href="/works">
            <img
              src={suitcase}
              alt=""
            />
            <p> Works </p>
          </a>
          <a className="drop-link" href="/blog">
            <img
              src={news}
              alt=""
            />
            <p> Blog </p>
          </a>
          <a className="drop-link" href="/images">
            <img
              src={img}
              alt=""
            />
            <p> Images </p>
          </a>
          <a className="drop-link" href="mailto:enjeckc1e0@gmail.com">
            <img
              src={email}
              alt=""
            />
            <p> Email </p>
          </a>
          <a className="drop-link" href="https://github.com/enjeck">
            <img
              src={gh}
              alt=""
            />
            <p> GitHub </p>
          </a>
          <a className="drop-link" href="https://www.linkedin.com/in/c1e0/">
            <img
              src={li}
              alt=""
            />
            <p> LinkedIn </p>
          </a>
          </div>
      </div>
    </div>
  );
};

export default BoxMenuDrop;
