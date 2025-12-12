import React, { useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { ProjectsContent } from "../data/projectsContent";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

const ProjectsPage = ({ results }) => {
  return (
    <div className="main">
      <Head>
        <title>Projects - Web Development Portfolio | Gfolio</title>
        <meta name="description" content="Browse my portfolio of web development projects including React applications, Python tools, and creative coding experiments. See my work in action." />
        <meta name="keywords" content="portfolio, web development projects, React projects, Python projects, JavaScript, web applications" />
        <meta property="og:title" content="Projects - Web Development Portfolio" />
        <meta property="og:description" content="Browse my portfolio of web development projects and creative coding experiments." />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <h1 className="visually-hidden">Web Development Projects Portfolio</h1>
        <p className="result-count">
          About {ProjectsContent.length} results (0.84 seconds)
        </p>
        <div className="projects-content">
          {ProjectsContent.map((item) => (
            <div className="projects-card">
              <a href={`${item.link}`} className="project-link">
                <p> {`${item.link}`} </p>
                <h3>{`${item.name}`}</h3>
              </a>
              <div className="projects-details">
                <div className="projects-img-container">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="projects-text-container">
                  <p className="projects-excerpt">{`${item.excerpt}`}</p>
                  <p className="projects-tools">{`${item.tools}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
