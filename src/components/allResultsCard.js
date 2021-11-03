import React, { useState } from "react";
import PropTypes from "prop-types";
import "./allResultsCard.css";

const AllResultsCard = ({ results }) => {
  const [filteredResults] = useState(results);
  function formatURL(u) {
    // Split a given url into its various parts
    let urltext = u;
    let url = new URL(urltext);
    let domain = url.origin
    let pathname = url.pathname
    let paths = pathname.split('/');
    paths = paths.filter(Boolean);
    return [domain, paths]
  }
  

  return (
    <div className="results-content">
      {filteredResults.map((item) => (
        <div className="result-card">
          <a href={`${item.link}`}>
            <p> 
             {/* Format URl with angle brackets between parts */}
              {`${formatURL(item.link)[0]}`}  
              {formatURL(item.link)[1].map((path) => (
                <span>{` › ${path}`}</span>
              ))  }
            </p>
            <h3>{`${item.name}`}</h3>
          </a>
          <p className="excerpt">{`${item.excerpt}`}</p>
        </div>
      ))}
    </div>
  );
};

AllResultsCard.propTypes = {
  results: PropTypes.array
};

export default AllResultsCard;
