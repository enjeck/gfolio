import React, { useState } from "react";
import Head from "next/head";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

function Social() {
  const contact = Content.filter((item) => item.category === "social");
  return (
    <div className="main">
      <Head>
        <title>Contact & Social Links - Connect with Me | Gfolio</title>
        <meta name="description" content="Get in touch and connect on professional networks. Find contact information, email, GitHub, LinkedIn, and other social profiles." />
        <meta name="keywords" content="contact, social links, email, GitHub, LinkedIn, professional network, get in touch" />
        <meta property="og:title" content="Contact & Social Links - Connect with Me | Gfolio" />
        <meta property="og:description" content="Get in touch and connect on professional networks. Find contact information and social profiles." />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="visually-hidden">Contact & Social Links</h1>
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {contact.length} results (0.57 seconds)
        </p>
        <AllResultsCard results={contact} />
      </div>
      <Footer />
    </div>
  );
}
export default Social;