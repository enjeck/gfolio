import "./styles.css";
import "./search.css";
import React from "react";
import FilterMenu from "./components/filtermenu";
import All from "./components/all";
import Layout from "./components/layout";

export default function Search() {
  return (
    <Layout>
      <FilterMenu />
      <All />
    </Layout>
  );
}
