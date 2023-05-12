const express = require('express');
const {uploadPoem,poemView,getPoems} = require('../controllers/poemController');
const { protectRoute } = require("../auth/protect");

const router = express.Router();
// blog
router.get("/",protectRoute, poemView);
router.get("/all", getPoems);

router.post('/', protectRoute,uploadPoem);
module.exports = router;