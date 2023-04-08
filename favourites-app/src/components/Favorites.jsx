// Importing the "React" library
import React from "react";

// Defining the "FavoritesComponent" functional component
const FavoritesComponent = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {/*Mapping over the "favorites" array and rendering each item as a list item*/}
        {favorites.map((item, index) => (
          <li key={index}>
            {item.trackName || item.collectionName || item.artistName}
            <button onClick={() => removeFromFavorites(item)}>
              Remove from favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesComponent;

