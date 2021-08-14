//import and use fs library
const fs = require("fs");
//built into the Node.js API
const path = require("path");
// inauiring express 1st step
const express = require("express");

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

// post or create notes
app.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
      res.status(400).send('The animal is not properly formatted.');
    } else {
      const animal = createNewAnimal(req.body, notes);
      res.json(animal);
    }
  });

// get links/join path with html
app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//wildcard
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
