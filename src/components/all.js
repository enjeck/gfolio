import React, { useState } from "react";
import AllResultsCard from "./allResultsCard";
import { Content } from "../data/content";
import AccordionComponent from "./accordion";

const All = () => {
  const all = Content;
  const first = Content.slice(0, 1);
  const theRest = Content.slice(1);

  return (
    <div className="all-results-container">
      <p className="result-count">About {all.length} results (0.67 seconds)</p>
      <AllResultsCard results={first} />
      <AccordionComponent />
      <AllResultsCard results={theRest} />
    </div>
  );
};

export default All;
