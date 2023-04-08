// Importing the Supertest library to send HTTP requests to the application
const request = require('supertest');

// Importing the Node.js application to be tested
const app = require('../app');

// Defining a test case to ensure that the "/search" returns results for a valid search term
test("Search endpoint returns results for valid search term", async () => {
  const searchTerm = "test";
  const response = await request(app).get(`/search?term=${searchTerm}`);

  // expecting response has a 200 status code, indicating success
  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body.results)).toBeTruthy();
});
