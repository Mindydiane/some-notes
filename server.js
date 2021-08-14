//import and use fs library
const fs = require("fs");
//built into the Node.js API
const path = require("path");
// inauiring express 1st step
const express = require("express");
// import json to file
const { notes } = require("./db/db");

//tell our app to use that port
const PORT = process.env.PORT || 3001;
// second step inquiring express
const app = express();

//(static middleware)to use js and css from public
app.use(express.static("public"));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
