const Photo = require("../models/Photo");

// For View 
const photoView = (req, res) => {
    res.render("photo", {
    });
}




//Post Request that handles new blog upload
const uploadPhoto = (req, res) => {
    const { title, url, description,place } = req.body;
    if (!title || !url || !description || !place) {
        console.log("Fill empty fields");
    } else {
        //Validation
        const newPhoto = new Photo({
            title,
            url,
            description,
            place
        });

        newPhoto.save().then(res.redirect("/photo"))

    }
}

// get all blogs


const getPhotos = async (req, res) => {
    try {
        const data = await Photo.find();
        res.json(data);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}

const getOnePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Photo.findById(id);
        // console.log(data)
        res.json(data);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports =  {
    uploadPhoto,
    photoView,
    getPhotos,
    getOnePhoto
};