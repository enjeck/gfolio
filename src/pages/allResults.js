import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";
import All from "../components/all";

function AllResults() {
  return (
    <div className="main">
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
