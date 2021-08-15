const router = require("express").Router();
const {
  filterByQuery,
  findById,
  createNewNote,
  validateNote,
} = require("../../lib/notes");
const { notes } = require("../../db/db.json");

//add a route, get method requires two arguements
router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  console.log(results);
  res.json(results);
});

//get a new route for notes by id
router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  // console.log(result);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// post or create notes
router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  console.log(notes);

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

// //delete route to be added later
// router.delete("/notes/:id", (req,res) => {
//   req.body.id = notes.length.toString(); 

// })

module.exports = router;
