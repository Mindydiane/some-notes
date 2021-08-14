const fs = require("fs");
const path = require("path");

function filterByQuery(query, notes) {
    let filteredResults = notes;
    if (query.title) {
        filteredResults = filteredResults.filter(
         //perform a comparison
         (note) => note.title === String(query.title)   
        );
    }
    if (query.text) {
        filteredResults = filteredResults.filter(
            (note) => note.text === query.text
        );
    }
    return filteredResults;
}
  
  function findById(id, notesArray) {
    const result = notesArray.filter((note) => note.id === id)[0];
    return result;
  }
  
  function createNewNote(body, notesArray) {
      
    // our function's main code will go here!
    const note = body;
    // console.log(note);
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, "./db/db.json"),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    // return finished code to post route for response
    return note;
  }

  function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    }
    if (!note.text || typeof note.text !== "string") {
      return false;
    }
    return true;
  }

  module.exports = {
      filterByQuery,
      findyById,
      createNewNote,
      validateNote,
  };