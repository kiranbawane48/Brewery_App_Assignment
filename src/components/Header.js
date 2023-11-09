import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSection, setSearchSection] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = async () => {
    try {
      // Make an API request to fetch search results based on the 'searchTerm'
      const response = await fetch(`/api/search?term=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <header>
      <nav className="header">
        <Link to="/" className="logo">
          <img src={Logo} alt="Brewery App Logo" />
          <span>Brewery App</span>
        </Link>
        <div className="icons">
          <span
            className="cursor-pointer text-xl text-gray-700 dark-text mr-5 bi bi-gear-wide-connected"></span>
          <span
            className="cursor-pointer text-xl text-gray-700 dark-text mr-5 bi bi-search"
            onClick={() => setSearchSection(!searchSection)}
          ></span>
          <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark-text" onClick={toggleDropdown}></span>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a href="/allcities">All Cities</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Display search input and button when searchSection is true */}
      {/* Display search input and button when searchSection is true */}
{searchSection && (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search by city, name, or type"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button> {/* Handle the search on button click */}
  </div>
)}
    </header>
  );
};

export default Header;
