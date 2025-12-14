
import React from "react";
import Head from "next/head";
import { EducationContent } from "../data/educationContent";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

const EducationPage = () => {
    return (
        <div className="main">
            <Head>
                <title>Education & Awards - Academic Background | Gfolio</title>
                <meta name="description" content="My academic background, degrees, and awards." />
                <meta property="og:title" content="Education & Awards | Gfolio" />
                <meta property="og:description" content="My academic background, degrees, and awards." />
                <meta property="og:type" content="website" />
            </Head>
            <h1 className="visually-hidden">Education & Awards</h1>
            <Header />
            <FilterMenu />
            <div className="all-results-container blogpage-container">
                <p className="result-count">
                    About {EducationContent.length} results
                </p>
                <div className="blog-content">
                    {EducationContent.map((item, index) => (
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
                            {/* Image container removed as we don't have thumbnails for education/awards */}
                            {/* <div className="blog-img-container">
                <img src={item.img} alt={item.name} />
              </div> */}
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EducationPage;
