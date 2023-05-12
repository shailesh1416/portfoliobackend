const Blog = require("../models/Blog");

// For View 
const blogView = (req, res) => {

    res.render("blog", {
    });
}




//Post Request that handles new blog upload
const uploadBlog = (req, res) => {
    const { title, url, blog } = req.body;
    if (!title || !url || !blog) {
        console.log("Fill empty fields");
    } else {

        console.log("reached here")
        //Validation
        const newBlog = new Blog({
            title,
            url,
            blog,
        });

        newBlog.save().then(res.redirect("/blog"))

    }
}

// get all blogs


const getBlogs = async (req, res) => {
    try {
        const data = await Blog.find();
        res.json(data);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports =  {
    uploadBlog,
    blogView,
    getBlogs
};