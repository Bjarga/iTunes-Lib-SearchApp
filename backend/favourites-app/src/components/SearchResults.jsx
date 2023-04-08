// Importing the "React" library
import React from "react";

// Defining the "SearchResultsComponent" functional component
const SearchResultsComponent = ({

  // Add a default value for searchResults
  searchResults = [],
  addToFavorites,
}) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {/* Mapping over the "searchResults" array and rendering each item as a list item */}
        {searchResults.map((item, index) => (
          <li key={index}>
            {item.trackName || item.collectionName || item.artistName}
            <button onClick={() => addToFavorites(item)}>
              Add to favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsComponent;
