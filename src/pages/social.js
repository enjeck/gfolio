import React, { useState } from "react";
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