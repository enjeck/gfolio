import React, { useState } from "react";
import Head from "next/head";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

function Writing() {
  const writing = Content.filter((item) => item.category === "writing");
  return (
    <div className="main">
      <Head>
        <title>Writing - Articles & Technical Content | Gfolio</title>
        <meta name="description" content="Read technical articles, tutorials, and written content on web development, programming best practices, and software engineering topics." />
        <meta name="keywords" content="technical writing, articles, tutorials, programming content, development blog, software engineering" />
        <meta property="og:title" content="Writing - Articles & Technical Content | Gfolio" />
        <meta property="og:description" content="Read technical articles, tutorials, and written content on web development and software engineering." />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="visually-hidden">Writing - Articles & Technical Content</h1>
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {writing.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={writing} />
      </div>
      <Footer />
    </div>
  );
}
export default Writing;
