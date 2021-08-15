const router = require('express').Router();
const noteRoutes = require('./notes.js');

router.use(noteRoutes);

module.exports = router;