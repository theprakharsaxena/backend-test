import express from "express";
import serverless from "serverless-http";

const app = express();

// Define a simple route that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Server listens on port 3000
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

module.exports.handler = serverless(app);
