import "./mobileSearch.css";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

const MobileSearch = () => {

  const options = [
    {
      name: "everything about you",
      value: "all"
    },
    {
      name: "about",
      value: "about"
    },
    { name: "works", value: "works" },
    { name: "writing", value: "writing" },
    { name: "images", value: "images" },
    { name: "social", value: "social" }
  ];

  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = "";
  if (arr) {
    val = arr[0];
  }

  useEffect(() => {
    // Show the clear button when the search bar is nonempty. Otherwise, hide it. 
    const clearBtn = document.querySelector(".mobile-clear-icon");
    let input = document.querySelector(".mobile-search-input").value;
    if (input) {
      clearBtn.style.display = "none";
    } else {
      clearBtn.style.display = "inline-block";
    }
  }, []);

  /// Remove option upon button click
  function removeOption(i) {
    // i.remove();
    i.style.display = "none";
  }

  // Clear input field
  function clear() {
    let input = document.querySelector(".mobile-search-input");
    input.value = "";
  }

  // Search Website by pushing search term into url
  const history = useHistory();
  const searchWebsite = () => {
    let path = document.querySelector(".mobile-search-input").value;
    if (path) {
      history.push(path);
    }
  };

  const clearValue = () => {
    let closeIcon = document.querySelector(".mobile-clear-icon");
    let searchValue = document.querySelector(".mobile-search-input").value;
    if (searchValue) {
      closeIcon.style.display = "inline-block";
    } else {
      closeIcon.style.display = "none";
    }
  };

  useEffect(() => {
    // Trigger search when enter key is pressed
    let inputField = document.querySelector(".mobile-search-input");
    inputField.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
        // Show the enter screen, which was cropped while the search screen was active
        document.querySelector("body").style.height = "100%";
        document.querySelector("body").style.overflow = "scroll";
      }
    });

    // Only show the close icon when the search bar is nonempty
    let closeIcon = document.querySelector(".mobile-clear-icon");
    let searchValue = document.querySelector(".mobile-search-input").value;
    if (searchValue) {
      closeIcon.style.display = "inline-block";
    } else {
      closeIcon.style.display = "none";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Leave the mobile search area when the back icon is pressed
  function goBack() {
    document.querySelector(".mobile-search-box").style.display = "none";
    // Unhide the rest of the body
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.overflow = "scroll";
  }

  function useOutsideHandler(ref) {
    useEffect(() => {
      // Unhide the rest of the body when user leaves the mobile search area
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          document.querySelector("body").style.height = "100%";
       document.querySelector("body").style.overflow = "scroll";
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperSearchRef = useRef(null);
  useOutsideHandler(wrapperSearchRef);

  return (
    <div className="mobile-search-box">
      <div className="mobile-search-cont">
        <div className="mobile-search">
          <div className="mobile-search-value" ref={wrapperSearchRef}>
            <FontAwesomeIcon
              className="searchbar-icon back-icon"
              icon={faArrowLeft}
              onClick={goBack}
            />
            <input
              placeholder=" "
              autoComplete="on"
              className="mobile-search-input"
              defaultValue={val}
              onChange={clearValue}
            />
            <FontAwesomeIcon
              className="searchbar-icon mobile-clear-icon"
              icon={faTimes}
              title="Clear"
              onClick={clear}
            />
          </div>
          <div className="mobile-search-select">
            <div className="mobile-search-options">
              {options.map((option) => (
                <div className="mobile-search-option" type="button">
                  <span>
                    <span>
                      <FontAwesomeIcon className="clock-icon" icon={faClock} />
                      <Link to={`/${option.value}`}>{option.name}</Link>
                    </span>
                    <FontAwesomeIcon
                      className="delete-icon"
                      icon={faTimes}
                      title="Clear"
                      onClick={(e) =>
                        removeOption(
                          e.currentTarget.parentElement.parentElement
                        )
                      }
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
