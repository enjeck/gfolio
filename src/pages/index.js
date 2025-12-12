import React, { Component, useEffect } from "react";
import Head from "next/head";
import Logo from "../components/logo";
import SearchBox from "../components/searchbox";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/profilemenudrop";
import { useRouter } from "next/router";
import { Content } from "../data/content";
import Link from "next/link";

function Home() {
  const router = useRouter();

  // These values will be shown in the search dropdown
  // The name property is the actual text and the value property is the link
  const options = [
    {
      name: "all content",
      value: "all"
    },
    {
      name: "about me",
      value: "about"
    },
    { name: "projects", value: "works" },
    { name: "technical writing", value: "writing" },
    { name: "portfolio images", value: "images" },
    { name: "connect with me", value: "social" }
  ];

  // Website search
  const searchWebsite = () => {
    let path = document.querySelector(".search-input").value;
    // When search is triggered, add the value entered into the search bar to the url
    if (path) {
      router.push(path);
    }
  };

  useEffect(() => {
    let inputField = document.querySelector(".search-input");
    //Trigger search when the enter key is pressed
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

    // Route to random page if search input is empty
    if (!path) {
      router.push(`/${options[Math.floor(Math.random() * options.length)].value}`);
      return;
    }

    /* Get all elements matching the search term */
    const item = Content.filter((item) => item.category === path);

    // Get the link of the first match
    // Redirect to first match, if it exists
    if (item[0]) {
      const url = item[0].link;
      window.location.href = url;
    } else if (path) {
      router.push(path);
    }
  }

  return (
    <div className="home main">
      <Head>
        <title>Gfolio - Freelance Web Developer & Technical Writer</title>
        <meta name="description" content="Freelance developer specializing in React, Next.js, and modern web development. Creating dynamic, responsive websites with clean code and exceptional user experiences." />
        <meta name="keywords" content="freelance developer, web development, React, Next.js, JavaScript, Python, technical writer, portfolio" />
        <meta property="og:title" content="Gfolio - Freelance Web Developer & Technical Writer" />
        <meta property="og:description" content="Professional freelance developer creating modern web applications with React and Next.js." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="top-menu">
        <span className="top-menu-item no-show-mobile">
          {" "}
          <a href="mailto:enjeckc1e0 at gmail dot com"> Email </a>
        </span>
        <span className="top-menu-item no-show-mobile">
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
          <SearchBox options={options} />
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
          Earth
        </div>
        <div className="footer-links">
          <div className="footer-links-section">
            <Link href="/about"> About </Link>
            <Link href="/projects"> Projects </Link>
            <Link href="/blog"> Blog</Link>
            <a href="mailto:enjeckc1e0 at gmail dot com"> Email </a>
          </div>
          <div className="footer-links-section">
            <a href="https://github.com/enjeck"> GitHub </a>
            <a href="https://www.linkedin.com/in/c1e0/"> LinkedIn </a>
            <a href="mailto:enjeckc1e0 at gmail dot com"> Email </a>
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
