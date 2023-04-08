// Importing the necessary modules for the Node.js application
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Defining a route handler for the "/search" endpoint
app.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.term;
    // Sending an HTTP GET request to the iTunes Search API with the specified search term and limit
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: searchTerm,
        limit: 25,
      },
    });
    // Returning the response data from the iTunes Search API as JSON
    res.json(response.data);
    // Handling any errors that occur during the request
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

// Exporting the Express application instance for use in other modules
module.exports = app;
