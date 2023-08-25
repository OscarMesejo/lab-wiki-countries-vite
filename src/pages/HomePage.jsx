import { useState, useEffect } from "react"; 

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

                <div className="list-group">
                    {countries.map((country)=>{
                        return <div key= {country._id} >
                        <h3>{country.name.official}</h3>
                        </div>
                    })}
                </div>
            </div>

    )
}

export default HomePage;
