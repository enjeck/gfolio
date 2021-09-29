import React from "react";
import { ImagesContent } from "../data/imagesContent";
import "./imagesPage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

const ImagesPage = ({ results }) => {
  return (
    <div className="main">
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
