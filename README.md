# iTunes-Lib-SearchApp
# iTunes Search App

This is a full-stack web application that interfaces with the iTunes Search API, allowing users to search for content within the iTunes Store and Apple Books Store. Users can also create a list of their favorite items.

## How to use the app

1. Enter a search term in the search bar to find content from the iTunes Store and Apple Books Store.
2. Browse through the search results.
3. Click the "Add to favorites" button next to an item to add it to your favorites list.
4. Click the "Show Favorites" button to view your favorites list.
5. To remove an item from the favorites list, click the "Remove from favorites" button next to the item.

## Installation and Running the App Locally

To install, test, and run the app on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal or command prompt and navigate to the project folder.
3. Run `npm install` in the root folder to install the necessary dependencies for the backend.
4. Run `cd frontend` to navigate to the frontend folder, then run `npm install` to install the frontend dependencies.
5. Navigate back to the root folder by running `cd ..`.
6. Run `npm start` to start both the backend and frontend servers concurrently.
7. Open a web browser and navigate to `http://localhost:5173` to view and interact with the app.

## Security Measures

To ensure the security of this app, the following measures have been taken:

1. The backend server acts as a proxy for requests to the iTunes Search API, so the client-side app does not directly interact with the API. This reduces the risk of exposing sensitive information or API keys.
2. The backend server validates user input before sending requests to the iTunes Search API, preventing potential issues related to malicious input.
3. No API keys are required for the iTunes Search API, so there is no risk of exposing sensitive API keys in this project.

