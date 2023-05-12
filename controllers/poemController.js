const Poem = require("../models/Poem");

// For View 
const poemView = (req, res) => {

    res.render("poem", {
    });
}




//Post Request that handles new blog upload
const uploadPoem = (req, res) => {
    const { title, url, poem } = req.body;
    if (!title || !poem) {
        console.log("Fill empty fields");
    } else {
        //Validation
        const newPoem = new Poem({
            title,
            url,
            poem,
        });

        newPoem.save().then(res.redirect("/poem"))

    }
}

// get all blogs


const getPoems= async (req, res) => {
    try {
        const data = await Poem.find();
        res.json(data);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports =  {
    uploadPoem,
    poemView,
    getPoems
};