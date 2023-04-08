import React from "react";
import { render } from "@testing-library/react";

// Importing the "App" component to be tested
import App from "../App";


// Defining a test case to ensure that the "App" component renders correctly
test("App component renders correctly", () => {
  const { asFragment } = render(<App />);

  // Asserting that the rendered component matches the snapshot
  expect(asFragment()).toMatchSnapshot();
});
