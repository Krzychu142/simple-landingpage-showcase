import React from "react";
import "./styles/Portfolio.css";
import { Link } from "react-router-dom";
import { TfiBackRight } from "react-icons/tfi";
import useWindowSize from "../hooks/useWindowSize";

import Slider from "./Slider";

function Portfolio() {
  const size = useWindowSize();
  return (
    <main className="portfolio--container">
      <Slider />
      <nav className="portfolio--nav">
        <Link to="/" className="portfolio--link">
          <TfiBackRight size={size.width >= 480 ? 40 : 30} />
        </Link>
      </nav>
    </main>
  );
}

export default Portfolio;
