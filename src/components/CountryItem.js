import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Only returns value if string isn't empty
function checkVal(val) {
  if (val !== "") {
    return val;
  } else {
    return "N/A";
  }
}

function CountryItem(props) {
  return (
    <div className="Country">
      <h1 id="country_name">{props.name}</h1>
      <img id="country_flag" src={props.flag} alt="FLAG" />
      <div id="country_data">
        <p id="country_language">
          <FontAwesomeIcon icon="language" />
          &nbsp;
          {checkVal(props.language)}
        </p>
        <p id="country_capital">
          <FontAwesomeIcon icon="city" />
          &nbsp;
          {checkVal(props.capital)}
        </p>
        <p id="country_population">
          <FontAwesomeIcon icon="users" />
          &nbsp;
          {checkVal(props.population)}
        </p>
        <p id="country_region">
          <FontAwesomeIcon icon="globe" />
          &nbsp;
          {`${checkVal(props.region)}/${checkVal(props.subregion)}`}
        </p>
      </div>
    </div>
  );
}

export default CountryItem;
