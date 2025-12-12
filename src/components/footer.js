import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="country">
        Cameroon
      </div>
      <div className="footer-links">
        <div className="footer-links-section">
          <Link href="/about"> About </Link>
          <Link href="/projects"> Projects </Link>
          <Link href="/blog"> Blog</Link>
          <a href="mailto:enjeckc1e0@gmail.com"> Email </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
