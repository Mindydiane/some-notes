const path = require("path");
const router = require("express").Router();

// get links/join path with html
router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../../public/index.html"));
  });
  
  router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
  });
  
  //wildcard
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  module.exports = router;