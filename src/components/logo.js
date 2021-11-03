import "./logo.css";
import React, { useEffect } from "react";

const Logo = () => {
  // Creating a colorful logo like Google's
  useEffect(() => {
    // Select the logo text
    const logoEl = document.querySelector(".logo-text");
    if (logoEl.childElementCount <= 1) {
      let logo = logoEl.innerHTML;
      // Remove whitespaces so that they do not count as a character
      logo = logo.trim();
      // Remove the original logo text
      logoEl.removeChild(logoEl.firstChild);
      // Select each letter of text and give it a color based on its position
      for (var i = 0; i < logo.length; i++) {
        const letter = document.createElement("h1");
        let position = i + 1;
        if (position === 1 || position === 1 + 3) {
          letter.className = "blue";
        } else if (position === 2 || position === 2 + 4) {
          letter.className = "red";
        } else if (position === 3 || position === 3 + 4) {
          letter.className = "yellow";
        } else if (position === 5 || position === 5 + 4) {
          letter.className = "green";
        }
        // Add new colored logo text to DOM
        const node = document.createTextNode(`${logo[i]}`);
        letter.appendChild(node);
        logoEl.appendChild(letter);
      }
    }
  }, []);

  return (
    <div className="search-logo">
      <div className="logo-text"> Enjeck </div>
    </div>
  );
};

export default Logo;
