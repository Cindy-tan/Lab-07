import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSelect = (event) => {
    const selectedCca2 = event.target.value;
    const countryData = countries.find((c) => c.cca2 === selectedCca2);
    if (countryData) {
      navigate(`/countries/${selectedCca2}`, { state: { data: countryData } });
    }
  };

  return (
    <div className="">
      <h1>World Kingdoms</h1>
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>
          Select a country
        </option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
};

export default Countries;
