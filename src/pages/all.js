import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";
import All from "../components/all";

function AllResults() {
  return (
    <div className="main">
      <Head>
        <title>All Results - Complete Portfolio & Content | Gfolio</title>
        <meta name="description" content="View all content including projects, blog posts, articles, and contact information in one comprehensive overview." />
        <meta name="keywords" content="portfolio overview, all content, projects, blog, articles, complete portfolio" />
        <meta property="og:title" content="All Results - Complete Portfolio & Content | Gfolio" />
        <meta property="og:description" content="View all content including projects, blog posts, and articles in one comprehensive overview." />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="visually-hidden">All Results - Complete Portfolio</h1>
      <Header />
      <FilterMenu />
      <div className="all-container">
        <All />
      </div>
      <Footer />
    </div>
  );
}
export default AllResults;
