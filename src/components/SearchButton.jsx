import React from 'react';
import { Search } from 'lucide-react';

const SearchButton = () => {
  return (
    <button className="search-btn">
      <Search className="search-icon" />
      <input id="search" type="search" placeholder="Filter" aria-label="Search or filter results" />
    </button>
  );
};

export default SearchButton;
