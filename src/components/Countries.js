import React, { Component } from "react";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import axios from "axios";

const url = "https://restcountries.eu/rest/v2/all/";

export class Countries extends Component {
  state = {
    countries: [],
    isLoading: true,
    query: "",
  };

  //use axios to call api
  componentDidMount() {
    axios.get(url).then((res) => {
      const countries = res.data;
      console.log(countries);
      this.setState({ countries: countries });
      this.setState({ isLoading: false });
    });
  }

  setQuery(e) {
    this.setState({ query: e.target.value.substr(0, 20) });
  }

  render() {
    let filteredCountries = this.state.countries.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(this.state.query.toLowerCase());
    });

    return (
      <div>
        <div className="Search">
          <input
            type="text"
            placeholder={"Search..."}
            value={this.state.query}
            onChange={this.setQuery.bind(this)}
            id="search-bar"
          />
        </div>
        <div className="Countries">
          {this.state.isLoading === true ? (
            <Spinner />
          ) : filteredCountries.length > 0 ? (
            filteredCountries.map((c) => {
              return (
                <CountryItem
                  key={c.alpha2Code}
                  name={c.name}
                  nativeName={c.nativeName}
                  flag={c.flag}
                  language={c.languages[0].name}
                  capital={c.capital}
                  population={c.population.toLocaleString()}
                  region={c.region}
                  subregion={c.subregion}
                  currency={c.currencies[0].name}
                  currency_symbol={c.currencies[0].symbol}
                />
              );
            })
          ) : (
            <h1 style={{ color: "#eeeeee" }}>No Results</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Countries;
