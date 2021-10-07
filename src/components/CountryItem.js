import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CountryItem(props) {

  //props destructuring + modifying
  const name = props.country.name.common;
  const flag = props.country.flags.png;
  const language = props.country.languages ? props.country.languages[Object.keys(props.country.languages)[0]] : "n/a";
  const capital = props.country.capital ? props.country.capital[0] : "n/a"
  const population = props.country.population.toLocaleString();
  const region = props.country.region;
  const subregion = props.country.subregion ? props.country.subregion : "n/a"
  const currencyName = props.country.currencies ? props.country.currencies[Object.keys(props.country.currencies)[0]].name : "n/a";
  const currencySymbol = props.country.currencies ? props.country.currencies[Object.keys(props.country.currencies)[0]].symbol : "n/a";

  return (
    <div className="Country">
      <h1 id="country_name">{name}</h1>
      <img id="country_flag" src={flag} alt="FLAG" />
      <div id="country_data">
        <p id="country_language">
          <FontAwesomeIcon className="country_data-icon" icon="language" />
          &nbsp;
          {language}
        </p>
        <p id="country_capital">
          <FontAwesomeIcon className="country_data-icon" icon="city" />
          &nbsp;
          {capital}
        </p>
        <p id="country_population">
          <FontAwesomeIcon className="country_data-icon" icon="users" />
          &nbsp;
          {population}
        </p>
        <p id="country_region">
          <FontAwesomeIcon className="country_data-icon" icon="globe" />
          &nbsp;
          {`${region} | ${subregion}`}
        </p>
        <p className="country_currency">
          <span className="country_data-icon">{currencySymbol}</span>
          {` | ${currencyName}`}
        </p>
      </div>
    </div>
  );
}

export default CountryItem;
