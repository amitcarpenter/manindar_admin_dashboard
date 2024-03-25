require("dotenv").config();
require("./config/database");
const express = require("express");
const path = require("path");
const cors = require("cors");
const loader_router = require("./routes/loaderRoutes");


const port = process.env.PORT;

const app = express();

const staticDirectories = [
  "css",
  "docs",
  "fonts",
  "images",
  "js",
  "pages",
  "partials",
  "scss",
  "vendors",
];
// Set Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend"));

// Use Middle ware
app.use(cors());
staticDirectories.forEach((directory) => {
  app.use(
    `/${directory}`,
    express.static(path.join(__dirname, `../frontend/${directory}`))
  );
});

app.use("/", loader_router);

app.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
