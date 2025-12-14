import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faHistory
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileSearch from "./mobileSearch";

const TopSearchBox = () => {
  const router = useRouter();
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
    { name: "social", value: "social" }
  ];

  const urlPathname = typeof window !== 'undefined' ? window.location.pathname : router?.pathname || '';
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = "";
  if (arr) {
    val = arr[0];
  }

  const imgStyle = {
    verticalAlign: "middle",
    marginRight: 10,
    fontSize: "13px",
    color: "#aaa"
  };

  const removeBtnStyle = {
    verticalAlign: "middle",
    marginRight: 10,
    fontSize: "13px",
    color: "#555",
    border: "0",
    outline: "none",
    background: "transparent",
    float: "right",
    padding: "10px",
    cursor: "pointer"
  };

  const [isSearchActive, setSearchActive] = useState("false");

  function showOptions() {
    let el = document.querySelector(".search-select");
    el.style.display = "block";

    if (window.innerWidth < 768) {
      document.querySelector(".mobile-search-box").style.display = "block";
      document.querySelector(".search-select").style.display = "none";

      document.querySelector("body").style.height = "100vh";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".mobile-search-input").focus()
    }
    document.querySelector(".fa-search-left").style.display = "block";

  }

  function hideOptions() {
    setTimeout(function () {
      let el = document.querySelector(".search-select");
      el.style.display = "none";
    }, 200);
    document.querySelector(".fa-search-left").style.display = "none";
  }

  useEffect(() => {
    const clearBtn = document.querySelector(".clear-icon");
    let input = document.querySelector(".search-input").value;
    if (input) {
      clearBtn.style.display = "none";
    } else {
      clearBtn.style.display = "inline-block";
    }
  }, []);

  function removeOption(i) {
    i.style.display = "none";
  }

  function clear() {
    let input = document.querySelector(".search-input");
    input.value = "";
  }

  const searchWebsite = () => {
    let path = document.querySelector(".search-input").value;
    if (path) {
      router.push(path);
    }
  };

  const clearValue = () => {
    let closeIcon = document.querySelector(".clear-icon");
    let searchValue = document.querySelector(".search-input").value;
    if (searchValue) {
      closeIcon.style.display = "inline-block";
      document.querySelector(
        ".search"
      ).style.boxShadow = `1px 1px 6px rgba(0,0,0,0.2)`;
    } else {
      closeIcon.style.display = "none";
      document.querySelector(".search").style.boxShadow = `none`;
    }
  };

  useEffect(() => {
    // Trigger search when enter key is pressed
    let inputField = document.querySelector(".search-input");
    inputField.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
      }
    });

    let closeIcon = document.querySelector(".clear-icon");
    let searchValue = document.querySelector(".search-input").value;
    if (searchValue) {
      closeIcon.style.display = "inline-block";
      document.querySelector(
        ".search"
      ).style.boxShadow = `1px 1px 6px rgba(0,0,0,0.14)`;
    } else {
      closeIcon.style.display = "none";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <MobileSearch />
      </div>
      <div className="topmenu-search-box search-box">
        <div className="search-cont">
          <FontAwesomeIcon
            className="fa fa-search-left"
            icon={faSearch} />

          <div className="search">
            <div className="search-value">
              <input
                placeholder=" "
                autoComplete="on"
                className="search-input"
                defaultValue={val}
                onFocus={showOptions}
                onBlur={hideOptions}
                onChange={clearValue}
              />
            </div>
            <div className="search-select">
              <div className="search-options">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="topmenu-search-option search-option"
                    type="button"
                  >
                    <span>
                      <FontAwesomeIcon
                        className="fas"
                        icon={faHistory}
                        style={imgStyle}
                      />
                      <Link href={`/${option.value}`}>{option.name}</Link>
                      <span>
                        <button
                          className="remove-btn"
                          style={removeBtnStyle}
                          onClick={(e) =>
                            removeOption(
                              e.currentTarget.parentElement.parentElement
                                .parentElement
                            )
                          }
                        >
                          Remove
                        </button>
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="searchbox-icons">
            <FontAwesomeIcon
              className="si fa-times clear-icon"
              icon={faTimes}
              title="Clear"
              onClick={clear}
            />
            <FontAwesomeIcon className="si fa-search-right" icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSearchBox;
