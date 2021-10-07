import React, {useState, useEffect} from 'react'
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Counter from "./Counter";

const Countries = () => {

    //setting state
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState("");

    //on page load, set data to data.js file
    useEffect(() => {
        const fetchCountries = async () => {
            let res = await fetch("https://restcountries.com/v3.1/all")
            res = await res.json()
            setCountries(res)
            setLoading(false)
        }
        fetchCountries()
    }, []);

    //handle live search queries
    const handleQuery = (q) => {
        setQuery(q.target.value)
    }

    //filter countries based on search query
    let filteredCountries = (countries.filter(c => {
        
        let q = query.toLowerCase()

        //country destructuring
        const country = {
            name: c.name.common.toLowerCase(),
            language : c.languages ? c.languages[Object.keys(c.languages)[0]].toLowerCase() : "n/a",
            capital: c.capital ? c.capital[0].toLowerCase() : "n/a",
            region: c.region.toLowerCase(),
            subregion: c.subregion ? c.subregion.toLowerCase() : "n/a",
            currencyName: c.currencies ? c.currencies[Object.keys(c.currencies)[0]].name.toLowerCase() : "n/a"
        }
        //filter countries based on criteria
        if(country.name.includes(q)
        || country.language.includes(q)
        || country.capital.includes(q)
        || country.region.includes(q)
        || country.subregion.includes(q)
        || country.currencyName.includes(q)) {
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

        <Counter count={filteredCountries.length}/>
        
        <div className="Countries">
            {loading ? (<Spinner />) : 
            filteredCountries.length > 0 ? (
                filteredCountries.map((c, k) => {
                    return <CountryItem key={k} country={c} />
                }) 
            ) :  <h1 style={{ color: "#eeeeee" }}>No Results</h1>
            }
        </div>
    </>
}

export default Countries