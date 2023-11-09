import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [breweryData, setBreweryData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openbrewerydb.org/breweries');
        const data = await response.json();
        setBreweryData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleSearch = () => {
    const results = breweryData.filter((brewery) =>
      brewery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brewery.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brewery.brewery_type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by city, name, or type"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>


    <div className="search-results">
      {searchResults.map((brewery) => (
        <Card key={brewery.id} brewery={brewery} />
      ))}
    </div>
    </div>
  );
};

export default Search;
