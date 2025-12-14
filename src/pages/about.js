import React, { useState } from "react";
import Head from "next/head";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

function About() {
  const about = Content.filter((item) => item.category === "about");
  return (
    <div className="main">
      <Head>
        <title>About - Software Engineer & Technical Writer | Gfolio</title>
        <meta name="description" content="Learn about my expertise in web development, technical skills, and professional background. Specializing in React, Next.js, and modern web technologies." />
        <meta name="keywords" content="web developer, software engineer, web developer, React, Next.js, Gatsby, technical writer, Cameroon" />
        <meta property="og:title" content="About - Software Engineer & Technical Writer" />
        <meta property="og:description" content="Learn about my expertise in web development and technical writing." />
        <meta property="og:type" content="profile" />
      </Head>
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <h1 className="visually-hidden">About Me - Professional Background</h1>
        <p className="result-count">
          About {about.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={about} />
      </div>
      <Footer />
    </div>
  );
}
export default About;
