import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";
import Search from "./Search";

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
      const data = await fetchData();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const fetchData = async () => {
    const response = await fetch(`/api/search?term=${searchTerm}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch data");
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
          <span className="cursor-pointer text-xl text-gray-700 dark-text mr-5 bi bi-gear-wide-connected"></span>
          <span
            className="cursor-pointer text-xl text-gray-700 dark-text mr-5 bi bi-search"
            onClick={() => setSearchSection(!searchSection)}
          ></span>
          <span
            className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark-text"
            onClick={toggleDropdown}
          ></span>

          {isDropdownOpen ? (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/cities">All Cities</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>

      {searchSection && <Search />}
    </header>
  );
};

export default Header;
