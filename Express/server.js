// CRUD Operation Through Express

const express = require("express");

// Create Server
const app = express();

// Get Method
// Testing Route
app.get("/test", (req, res) => {
  res.send("testing a server");
});

// Start Server
const port = 3000;
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
