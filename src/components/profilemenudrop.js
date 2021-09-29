import "./profilemenudrop.css";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img
        className="profile-pic dropbtn"
        src="https://i.pinimg.com/474x/ca/a9/35/caa9352cd119efe5641d6f7c3cc755fb.jpg"
        alt="profile"
      />
      <div className="profile-hightlight-dropdown">
        <p> Portfolio Website </p>
        <p> Enjeck Cleopatra </p>
        <p> enjeckc1e0@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src="https://i.pinimg.com/474x/ca/a9/35/caa9352cd119efe5641d6f7c3cc755fb.jpg"
            alt="profile"
          />
          <p className="detail-text"> Enjeck Cleopatra </p>
          <p className="detail-text"> enjeckc1e0@gmail.com </p>
          <a href="/"> View My Other Website </a>
        </div>
        <a className="second-detail" href="/about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </a>
        <div className="third-detail">
          <a href="https://github.com/enjeck"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/PROTechThor/gfolio"> View code </a> <span> • </span>
          <a href="/blog"> Blog & news </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
