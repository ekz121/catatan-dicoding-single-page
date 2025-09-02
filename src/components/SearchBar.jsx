import React from 'react';

function SearchBar({ searchKeyword, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="🔍 Cari catatan..."
        value={searchKeyword}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;