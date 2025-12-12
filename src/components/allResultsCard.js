import React, { useState } from "react";
import PropTypes from "prop-types";

const AllResultsCard = ({ results }) => {
  const [filteredResults] = useState(results);
  
  function formatURL(u) {
    // Split a given url into its various parts
    let urltext = u;
    
    // Handle relative URLs by checking if they start with /
    if (urltext.startsWith('/')) {
      // For relative URLs, use a dummy base
      let url = new URL(urltext, 'http://localhost');
      let pathname = url.pathname;
      let paths = pathname.split('/');
      paths = paths.filter(Boolean);
      return ['', paths]; // Return empty domain for relative URLs
    }
    
    // For absolute URLs
    let url = new URL(urltext);
    let domain = url.origin;
    let pathname = url.pathname;
    let paths = pathname.split('/');
    paths = paths.filter(Boolean);
    return [domain, paths];
  }
  

  return (
    <div className="results-content">
      {filteredResults.map((item, index) => (
        <div key={index} className="result-card">
          <a href={`${item.link}`}>
            <p> 
             {/* Format URl with angle brackets between parts */}
              {`${formatURL(item.link)[0]}`}  
              {formatURL(item.link)[1].map((path, pathIndex) => (
                <span key={pathIndex}>{` › ${path}`}</span>
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
