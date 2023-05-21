const express = require('express');
const {uploadPhoto,photoView,getPhotos,getOnePhoto} = require('../controllers/photoController');
const { protectRoute } = require("../auth/protect");

const router = express.Router();
// photo
router.get("/",protectRoute, photoView);
router.get("/all", getPhotos);
router.get("/:id", getOnePhoto);

router.post('/', protectRoute,uploadPhoto);
module.exports = router;