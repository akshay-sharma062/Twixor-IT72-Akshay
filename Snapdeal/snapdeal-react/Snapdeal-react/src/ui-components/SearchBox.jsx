import { useState } from "react";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for Brands & Products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button>🔍</button>
    </div>
  );
};

export default SearchBox;
