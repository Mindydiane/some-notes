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


function findById(id, notesArray) {
    const result = notesArray.filter((note) => note.id === id)[0];
    return result;
}

function createNewNote(body, notesArray) {
    console.log(note);
    // our function's main code will go here!
    const note = body;
    notesArray.push(note);
    // return finished code to post route for response
    return note;
  }

// //add a route, get method requires two arguements
// app.get("/api/notes", (req, res) => {
//     let results = notes;
//     if (req.query) {
//       results = filterByQuery(req.query, results);
//     }
//     console.log(results);
//     res.json(results);
//   });

// //get a new route for notes by id
// app.get("/api/notes/:id", (req, res) => {
//     const result = findById(req.params.id, notes);
//       console.log(result);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
//   });

// post or create notes
app.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
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
