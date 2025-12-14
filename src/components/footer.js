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
          <Link href="/blog"> Blog </Link>
          <Link href="/experience"> Experience </Link>
          <Link href="/education"> Education </Link>
          <Link href="/contact"> Contact </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
