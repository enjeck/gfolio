import React from "react";
import Head from "next/head";
import { ImagesContent } from "../data/imagesContent";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

const ImagesPage = ({ results }) => {
  return (
    <div className="main">
      <Head>
        <title>Images - Project Gallery & Portfolio Screenshots | Gfolio</title>
        <meta name="description" content="Browse visual gallery of web development projects, UI designs, and application screenshots. View portfolio work and completed project examples." />
        <meta name="keywords" content="portfolio images, project gallery, web design screenshots, UI examples, development portfolio" />
        <meta property="og:title" content="Images - Project Gallery & Portfolio Screenshots | Gfolio" />
        <meta property="og:description" content="Browse visual gallery of web development projects, UI designs, and application screenshots." />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="visually-hidden">Project Gallery & Portfolio Screenshots</h1>
      <Header />
      <FilterMenu />
      <div className="images-content">
        {ImagesContent.map((item) => (
          <div className="images--card">
            <a href={item.link} className="images--img-container">
              <img src={item.img} alt={item.name} />
            </a>
            <a href={item.link} className="images--text-container">
              <p className="images--name">{`${item.name}`}</p>
              <p className="images--link">{`${item.link}`}</p>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImagesPage;
