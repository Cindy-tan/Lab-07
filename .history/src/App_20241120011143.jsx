import React, { useEffect, useState } from 'react';
import Countries from '../Components/Countries';
import axios from 'axios';
import Select from 'react-select';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterContinent, setFilterContinent] = useState('');
  const [filterSubregion, setFilterSubregion] = useState('');
  const [alphabeticalSort, setAlphabeticalSort] = useState(false); 
  const [sortByPopulation, setSortByPopulation] = useState(false); 
  const [sortByArea, setSortByArea] = useState(false); 

  useEffect(() => {
    
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setFilteredCountries(response.data); 
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  useEffect(() => {
    let sortedCountries = [...countries];

    if (filterContinent) {
      sortedCountries = sortedCountries.filter(country => country.continents.includes(filterContinent));
    }

    if (filterSubregion) {
      sortedCountries = sortedCountries.filter(country => country.subregion === filterSubregion);
    }

    if (alphabeticalSort) {
      sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common)); 
    }

    if (sortByPopulation) {
      sortedCountries = sortedCountries.sort((a, b) => b.population - a.population); 
    }

    if (sortByArea) {
      sortedCountries = sortedCountries.sort((a, b) => b.area - a.area); 
    }

    setFilteredCountries(sortedCountries);
  }, [countries, filterContinent, filterSubregion, alphabeticalSort, sortByPopulation, sortByArea]);

  return (
    <div className="App">
      <h1>Countries of the World</h1>
      <div className="filters">
        {/* Alphabetical Sorting Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={alphabeticalSort}
              onChange={() => setAlphabeticalSort(!alphabeticalSort)} 
            />
            Sort Alphabetically
          </label>
        </div>

        {/* Population Sorting Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={sortByPopulation}
              onChange={() => setSortByPopulation(!sortByPopulation)} 
            />
            Sort by Population
          </label>
        </div>

        {/* Area Sorting */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={sortByArea}
              onChange={() => setSortByArea(!sortByArea)} 
            />
            Sort by Area
          </label>
        </div>

        {/* Continent Dropdown Filter */}
        <div>
          <Select
            options={[
              { value: '', label: 'All Continents' },
              { value: 'Africa', label: 'Africa' },
              { value: 'Asia', label: 'Asia' },
              { value: 'Europe', label: 'Europe' },
              { value: 'Oceania', label: 'Oceania' },
              { value: 'North America', label: 'North America' },
              { value: 'South America', label: 'South America' }
            ]}
            value={filterContinent}
            onChange={selected => setFilterContinent(selected.value)} 
            placeholder="Filter by Continent"
          />
        </div>

        {/* Subregion Filter */}
        <div>
          <Select
            options={[
              { value: '', label: 'All Subregions' },
              { value: 'Northern America', label: 'Northern America' },
              { value: 'Southern Asia', label: 'Southern Asia' },
              { value: 'Western Europe', label: 'Western Europe' },
              { value: 'Eastern Europe', label: 'Eastern Europe' },
              { value: 'Northern Europe', label: 'Northern Europe' },
              { value: 'Southern Europe', label: 'Southern Europe' },
              { value: 'Central America', label: 'Central America' },
              { value: 'Caribbean', label: 'Caribbean' },
              { value: 'Sub-Saharan Africa', label: 'Sub-Saharan Africa' },
              { value: 'Eastern Africa', label: 'Eastern Africa' },
              { value: 'Middle Africa', label: 'Middle Africa' },
              { value: 'Northern Africa', label: 'Northern Africa' },
              { value: 'Southern Africa', label: 'Southern Africa' },
              { value: 'Western Africa', label: 'Western Africa' },
              { value: 'Central Asia', label: 'Central Asia' },
              { value: 'Eastern Asia', label: 'Eastern Asia' },
              { value: 'Southeast Asia', label: 'Southeast Asia' },
              { value: 'Western Asia', label: 'Western Asia' },
              { value: 'Oceania', label: 'Oceania' },
              { value: 'Australia and New Zealand', label: 'Australia and New Zealand' },
              { value: 'Melanesia', label: 'Melanesia' },
              { value: 'Micronesia', label: 'Micronesia' },
              { value: 'Polynesia', label: 'Polynesia' },
              { value: 'South America', label: 'South America' },
              { value: 'Andean States', label: 'Andean States' },
              { value: 'Southern Cone', label: 'Southern Cone' },
              { value: 'Brazilian Highlands', label: 'Brazilian Highlands' },
            ]}
            value={filterSubregion}
            onChange={selected => setFilterSubregion(selected.value)} // Update subregion filter
            placeholder="Filter by Subregion"
          />
        </div>

      </div>

      {/* Displaying Countries */}
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default App;
