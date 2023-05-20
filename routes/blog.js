const express = require('express');
const {uploadBlog,blogView,getBlogs,getOneBlog} = require('../controllers/blogController');
const { protectRoute } = require("../auth/protect");

const router = express.Router();
// blog
router.get("/",protectRoute, blogView);
router.get("/all", getBlogs);
router.get("/:id", getOneBlog);

router.post('/', protectRoute,uploadBlog);
module.exports = router;