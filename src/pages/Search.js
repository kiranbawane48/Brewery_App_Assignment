// SearchPage.js

import React, { useState, useEffect } from "react";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    const searchTerm = new URLSearchParams(window.location.search).get("term");
    
    // Example API request (you may need to adjust the URL)
    fetch(`/api/search?term=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error searching:", error);
      });
  }, []);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <p><strong>Name:</strong> {result.name}</p>
            <p><strong>Address:</strong> {result.address}</p>
            <p><strong>Phone:</strong> {result.phone}</p>
            <p><strong>Website:</strong> <a href={result.website} target="_blank" rel="noopener noreferrer">{result.website}</a></p>
            <p><strong>Rating:</strong> {result.rating}</p>
            <p><strong>State, City:</strong> {result.state}, {result.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
