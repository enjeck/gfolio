import React, { useState } from "react";
import Head from "next/head";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

function Works() {
  const works = Content.filter((item) => item.category === "works");
  return (
    <div className="main">
      <Head>
        <title>Works - Development Projects & Portfolio | Gfolio</title>
        <meta name="description" content="Browse portfolio of completed development projects including web applications, e-commerce sites, and full-stack solutions using modern technologies." />
        <meta name="keywords" content="portfolio, development projects, web applications, completed work, freelance projects, full-stack development" />
        <meta property="og:title" content="Works - Development Projects & Portfolio | Gfolio" />
        <meta property="og:description" content="Browse portfolio of completed development projects including web applications and full-stack solutions." />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="visually-hidden">Works - Development Projects & Portfolio</h1>
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {works.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={works} />
      </div>
      <Footer />
    </div>
  );
}
export default Works;
