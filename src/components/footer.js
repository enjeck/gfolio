import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="country">
        Earth
      </div>
      <div className="footer-links">
        <div className="footer-links-section">
          <Link href="/about"> About </Link>
          <Link href="/projects"> Projects </Link>
          <Link href="/blog"> Writing </Link>
          <a href="mailto:enjeckc1e0 at gmail dot com"> Contact </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
