// Importing the necessary modules for the React application
import React, { useState } from "react";
import SearchResultsComponent from "./components/SearchResults";
import FavoritesComponent from "./components/Favorites";

// Defining the main "App" component using the "useState" hook to manage state variables
function App() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Defining a function to handle search requests using the iTunes Search API
  const handleSearch = async (searchTerm) => {
    const response = await fetch(`https://tasteful-stone-production.up.railway.app/search?term=${searchTerm}`);

    const data = await response.json();
    setSearchResults(data.results);
  };

  // Defining a function to add an item to the list of favorites
  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  // Defining a function to remove an item from the list of favorites
  const removeFromFavorites = (itemToRemove) => {
    setFavorites(favorites.filter((item) => item !== itemToRemove));
  };

  // Rendering the user interface using the state variables and other components
  return (
    <div className="App">
      <h1>iTunes Search</h1>
{/* Rendering an input field for searching */}
      <input 
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
{/* Rendering a button to toggle between search results and favorites */}
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? "Show Search Results" : "Show Favorites"}
      </button>

{/* Rendering either the search results or the favorites list based on the "showFavorites" state variable */}
      {showFavorites ? (
        <FavoritesComponent
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      ) : (
        <SearchResultsComponent
          searchResults={searchResults}
          addToFavorites={addToFavorites}
        />
      )}
    </div>
  );
}

export default App;
