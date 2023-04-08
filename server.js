// This code starts a Node.js server using the "app" module and 
// listens for incoming HTTP requests on port 5000.
const app = require('./app');

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
