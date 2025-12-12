import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faImage,
  faNewspaper,
  faMapMarkerAlt,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const FilterMenu = () => {
  const router = useRouter();

  return (
    <div className="filter-menu">
      <div className="filter-menu-items">
        <Link
          href="/all"
          className={`filter-menu-item ${router.pathname === '/all' ? 'item-active' : ''}`}
        >
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span> All </span>
        </Link>
        <Link
          href="/projects"
          className={`filter-menu-item fmi ${router.pathname === '/projects' ? 'item-active' : ''}`}
        >
          <FontAwesomeIcon className="icon" icon={faBriefcase} />
          <span> Projects </span>
        </Link>
        <Link
          href="/images"
          className={`filter-menu-item fmi ${router.pathname === '/images' ? 'item-active' : ''}`}
        >
          <FontAwesomeIcon className="icon" icon={faImage} />
          <span> Images </span>
        </Link>
        <Link
          href="/blog"
          className={`filter-menu-item fmi ${router.pathname === '/blog' ? 'item-active' : ''}`}
        >
          <FontAwesomeIcon className="icon" icon={faNewspaper} />
          <span> News </span>
        </Link>
        {/* <Link
          href="/maps"
          className={`filter-menu-item ${router.pathname === '/maps' ? 'item-active' : ''}`}
        >
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <span> Maps </span>
        </Link> */}
      </div>
    </div>
  );
};

export default FilterMenu;
