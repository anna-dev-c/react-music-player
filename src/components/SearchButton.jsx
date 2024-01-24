import React from 'react';
import { Search } from 'lucide-react';

const SearchButton = () => {
  return (
    <button className="search-btn">
      <Search className="search-icon" />
      <input type="search" id="search" placeholder="Filter" />
    </button>
  );
};

export default SearchButton;
