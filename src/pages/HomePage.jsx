import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState([]);
    const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

    useEffect(() => {            
        fetch(apiUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => setCountries(data))
        .catch((err) => console.log(err))
        
      }, [] );

    return (

            <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>

                <div className="listGroup">
                    {countries.map((country)=>{
                        return (
                        <div key= {country._id} >
                        <Link to={`/${country.alpha3Code}`} > {country.name.official}</Link>
                        </div>
                        )
                    })}
                </div>
            </div>

    )
}

export default HomePage;
