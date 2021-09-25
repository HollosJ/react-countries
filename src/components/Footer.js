import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="Footer">
      <a href="#top">
        <FontAwesomeIcon icon="angle-double-up" /> Back to the top{" "}
        <FontAwesomeIcon icon="angle-double-up" />
      </a>
      <div>
        <a href="https://restcountries.com/" target="_blank">
          RESTCountries API
        </a>
      </div>
    </div>
  );
}
