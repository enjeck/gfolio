import React from "react";
import Link from "next/link";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

function NotFound() {
  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = " ";
  if (arr) {
    val = arr[0];
  }

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container notfound-page">
        <div className="suggest">
          <p> Did you mean: </p>
          <div className="suggestions">
            <Link href="/all"> all </Link>
            <Link href="/about"> about </Link>
            <Link href="/works"> works </Link>
            <Link href="/social"> social </Link>
            <Link href="/writing"> writing </Link>
          </div>
        </div>
        <div className="notfound-details">
          <p> No results containing all your search terms were found.</p>
          <p>
            {" "}
            Your search - <b> {val} </b> - did not match any documents.
          </p>
          <p> Suggestions: </p>
          <ul>
            <li>Try a different keyword from the search dropdown</li>
            <li>Make sure that all words are spelled correctly.</li>
            <li>Click one of the links from the suggestions or menu above</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NotFound;
