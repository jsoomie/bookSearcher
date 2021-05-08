const express = require("express");
const app = express();
const compression = require("compression");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

// Database connect
db();

// Middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  console.log("\x1b[36m%s\x1b[0m", `API @ port ${PORT}`);
});
