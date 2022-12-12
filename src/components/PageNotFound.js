import React from "react";
import { Link } from "react-router-dom";
import "./styles/PageNotFound.css";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div>
        <h3>not here</h3>
        <p>incorectl path</p>
        <Link to="/" className="pageNotFound--link">
          back to home page
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
