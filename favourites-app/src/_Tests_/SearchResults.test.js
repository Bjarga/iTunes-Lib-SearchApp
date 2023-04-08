// Importing the necessary libraries for testing the React component
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchResultsComponent from "../components/SearchResults";


// Defining a test case to ensure that the "addToFavorites" function is called when the button is clicked
test("addToFavorites is called when the button is clicked", () => {
  const addToFavorites = jest.fn();

  // Defining the search results to be used in the test
  const searchResults = [
    {
      trackName: "Test Track",
      collectionName: "Test Collection",
      artistName: "Test Artist",
    },
  ];

  // Rendering the "SearchResultsComponent" component using the "@testing-library/react" library
  const { getByText } = render(
    <SearchResultsComponent
      searchResults={searchResults}
      addToFavorites={addToFavorites}
    />
  );

  // Simulating a click on the "Add to favorites" button
  fireEvent.click(getByText("Add to favorites"));

  // Asserting that the "addToFavorites" function was called exactly once with the expected argument
  expect(addToFavorites).toHaveBeenCalledTimes(1);
  expect(addToFavorites).toHaveBeenCalledWith(searchResults[0]);
});
