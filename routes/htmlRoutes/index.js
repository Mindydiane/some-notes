const router = require('express').Router();
const noteRoutes = require('./htmlInfo');

router.use(require("./htmlInfo"))
router.use(noteRoutes);

module.exports = router;