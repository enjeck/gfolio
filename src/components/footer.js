import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="country">
        Cameroon
      </div>
      <div className="footer-links">
        <div className="footer-links-section">
          <a href="/#/about"> About </a>
          <a href="/#/projects"> Projects </a>
          <a href="/#/blog"> Blog</a>
          <a href="mailto:enjeckc1e0@gmail.com"> Email </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
