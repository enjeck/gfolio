import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
const logo = "/images/e-logo.png"
const li = "/images/linkedIn-icon.png"
const gh = "/images/github-icon.png"
const news = "/images/newspaper.png"
const suitcase = "/images/suitcase.png"
const email = "/images/gmail-icon.png"
const img = "/images/image.png"
const about = "/images/info.png"


const BoxMenuDrop = () => {
  const [isActive, setActive] = useState("false");

  // Toggle the dropdown
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Hide the dropdown when user clicks outside the element
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
          <Link className="drop-link" href="/">
            <img
              src={logo}
              alt="Search icon"
            />
            <p> Search </p>
          </Link>
          <Link  className="drop-link" href="/about">
            <img
              src={about}
              alt="About icon"
            />
            <p> About </p>
          </Link >
          <Link  className="drop-link" href="/works">
            <img
              src={suitcase}
              alt="Works icon"
            />
            <p> Works </p>
          </Link >
          <Link  className="drop-link" href="/blog">
            <img
              src={news}
              alt="Blog icon"
            />
            <p> Blog </p>
          </Link >
          <Link  className="drop-link" href="/images">
            <img
              src={img}
              alt="Images icon"
            />
            <p> Images </p>
          </Link >
          <a className="drop-link" href="mailto:enjeckc1e0 at gmail dot com">
            <img
              src={email}
              alt="Email icon"
            />
            <p> Email </p>
          </a>
          <a className="drop-link" href="https://github.com/enjeck">
            <img
              src={gh}
              alt="GitHub icon"
            />
            <p> GitHub </p>
          </a>
          <a className="drop-link" href="https://www.linkedin.com/in/c1e0/">
            <img
              src={li}
              alt="LinkedIn icon"
            />
            <p> LinkedIn </p>
          </a>
          </div>
      </div>
    </div>
  );
};

export default BoxMenuDrop;
