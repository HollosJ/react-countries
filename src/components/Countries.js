import React, {useState, useEffect} from 'react'
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Counter from "./Counter";
import data from "../data"

const Countries = () => {

    //setting state
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState("");

    //on page load, set data to data.js file
    useEffect(() => {
        setCountries(data)
        setLoading(false)
    }, []);

    //handle live search queries
    const handleQuery = (q) => {
        setQuery(q.target.value)
    }

    //filter countries based on search query
    let filteredCountries = (countries.filter(c => {
        let q = query.toLowerCase()
        if(c.name.toLowerCase().includes(q) ||
        c.languages[0].name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.continent.toLowerCase().includes(q) ||
        c.currencies[0].name.toLowerCase().includes(q)){
            return c
        }
    }))

    return <>
        <div className="Search">
            <input
                type="text"
                placeholder={"Search..."}
                value={query}
                onChange={handleQuery}
                id="search-bar"
            />
        </div>

        <Counter className="Counter" count={filteredCountries.length}/>
        
        <div className="Countries">
            {loading ? (<Spinner />) : 
            filteredCountries.length > 0 ? (
                filteredCountries.map((c, k) => {
                    return <CountryItem
                    key={k}
                    name={c.name}
                    flag={c.flags[1]}
                    language={c.languages[0].name}
                    capital={c.capital}
                    population={c.population.toLocaleString()}
                    currency={c.currencies[0].name}
                    currency_symbol={c.currencies[0].symbol}
                    continent={c.continent}
                    region={c.region}
                    />
                }) 
            ) :  <h1 style={{ color: "#eeeeee" }}>No Results</h1>
            }
        </div>
    </>
}

export default Countries