import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Only returns value if string isn't empty
function checkVal(val) {
  return val !== "" && val !== null ?  val : "n/a"
}

function CountryItem(props) {
  return (
    <div className="Country">
      <h1 id="country_name">{props.name}</h1>
      <img id="country_flag" src={props.flag} alt="FLAG" />
      <div id="country_data">
        <p id="country_language">
          <FontAwesomeIcon className="country_data-icon" icon="language" />
          &nbsp;
          {checkVal(props.language)}
        </p>
        <p id="country_capital">
          <FontAwesomeIcon className="country_data-icon" icon="city" />
          &nbsp;
          {checkVal(props.capital)}
        </p>
        <p id="country_population">
          <FontAwesomeIcon className="country_data-icon" icon="users" />
          &nbsp;
          {checkVal(props.population)}
        </p>
        <p id="country_region">
          <FontAwesomeIcon className="country_data-icon" icon="globe" />
          &nbsp;
          {`${checkVal(props.capital)} | ${checkVal(props.region)}`}
        </p>
        <p className="country_currency">
          <span className="country_data-icon">{checkVal(props.currency_symbol)}</span>
          {` | ${checkVal(props.currency)}`}
        </p>
      </div>
    </div>
  );
}

export default CountryItem;
