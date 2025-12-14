
import React from "react";
import Head from "next/head";
import { ExperienceContent } from "../data/experienceContent";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

const ExperiencePage = () => {
    return (
        <div className="main">
            <Head>
                <title>Experience - Professional History | Gfolio</title>
                <meta name="description" content="My professional work experience and history." />
                <meta property="og:title" content="Experience - Professional History | Gfolio" />
                <meta property="og:description" content="My professional work experience and history." />
                <meta property="og:type" content="website" />
            </Head>
            <h1 className="visually-hidden">Experience - Professional History</h1>
            <Header />
            <FilterMenu />
            <div className="all-results-container blogpage-container">
                <p className="result-count">
                    About {ExperienceContent.length} results
                </p>
                <div className="blog-content">
                    {ExperienceContent.map((item, index) => (
                        <a href={item.link} className="blog-card" key={index} target="_blank" rel="noopener noreferrer">
                            <div className="blog-text-container">
                                <div className="category">
                                    {/* <img src={`${item.icon}`} className="blog-icon" alt={`${item.category} icon`} /> */}
                                    <p> {`${item.category}`} </p>
                                </div>
                                <h3>{`${item.name}`}</h3>
                                <p className="blog-excerpt">{`${item.excerpt}`}</p>
                                <p className="blog-date">{`${item.date}`}</p>
                            </div>
                            <div className="blog-img-container">
                                {/* <img src={item.img} alt={item.name} /> */}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ExperiencePage;
