import React from "react";
import "./BasicSearchBar.css";

const BasicSearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <form className="search-bar-container" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for products..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default BasicSearchBar;
