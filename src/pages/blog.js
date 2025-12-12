import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { BlogContent } from "../data/blogContent";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const BlogPage = ({ results }) => {
  return (
    <div className="main">
      <Head>
        <title>Blog - Technical Writing & Development Insights | Gfolio</title>
        <meta name="description" content="Explore blog posts covering web development, programming tutorials, and technical insights. Stay updated with the latest articles on modern development practices." />
        <meta name="keywords" content="blog, technical writing, web development, programming, tutorials, development insights" />
        <meta property="og:title" content="Blog - Technical Writing & Development Insights | Gfolio" />
        <meta property="og:description" content="Explore blog posts covering web development, programming tutorials, and technical insights." />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="visually-hidden">Blog - Technical Writing & Development Insights</h1>
      <Header />
      <FilterMenu />
      <div className="all-results-container blogpage-container">
        <p className="result-count">
          About {BlogContent.length} results (0.84 seconds)
        </p>
        <div className="blog-content">
          {BlogContent.map((item) => (
            <a href={item.link} className="blog-card">
              <div className="blog-text-container">
                <div className="category">
                  <img src={`${item.icon}`} className="blog-icon" alt={`${item.category} icon`} />
                  <p> {`${item.category}`} </p>
                </div>
                <h3>{`${item.name}`}</h3>
                <p className="blog-excerpt">{`${item.excerpt}`}</p>
                <p className="blog-date">{`${item.date}`}</p>
              </div>
              <div className="blog-img-container">
                <img src={item.img} alt={item.name} />
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
