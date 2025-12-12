import React, { useState } from "react";
import PropTypes from "prop-types";

const AllResultsCard = ({ results }) => {
  const [filteredResults] = useState(results);
  const [expandedItems, setExpandedItems] = useState({});
  
  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
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
      {filteredResults.map((item, index) => {
        const isExpanded = expandedItems[index];
        const isAboutCategory = item.category === "about";
        const shouldTruncate = isAboutCategory && !isExpanded;
        
        return (
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
            <p className={`excerpt ${shouldTruncate ? 'truncated' : 'expanded'}`}>
              {`${item.excerpt}`}
            </p>
            {isAboutCategory && (
              <button 
                className="see-more-btn" 
                onClick={() => toggleExpanded(index)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'See less' : 'See more'}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

AllResultsCard.propTypes = {
  results: PropTypes.array
};

export default AllResultsCard;
