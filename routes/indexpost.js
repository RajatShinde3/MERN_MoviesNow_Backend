const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth')
const { commentOnPost, deleteComment } = require('../controllers/post')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});


const uploadImg = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // reject a file 
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
            cb(null, true);
        } else {
            console.log('only jpeg, jpg and png are accepted!!!')
            cb(null, false)
        }
    },

    limits: {
        fileSize: 1024 * 1024 * 5
    },
}
).single('image');

const { Posts } = require('../models/Posts');



// Get All post 
router.get('/posts', (req, res, next) => {
    Posts.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});



router.post('/posts/add', uploadImg, (req, res, next) => {
    if (!req.file) return res.send('Please upload a file');
    if (!req.body.link) return res.send('Please upload a link');
    if (!req.body.title) return res.send('Please upload a title');
    if (!req.body.HeadingTitle) return res.send('Please upload a HeadingTitle');
    if (!req.body.datetime) return res.send('Please upload a datetime');
    if (!req.body.smallTitle) return res.send('Please upload a smallTitle');
    if (!req.body.MoviesContent) return res.send('Please upload a MoviesContent');
    if (!req.body.allCategories) return res.send('Please upload a allCategories');
    if (!req.body.slug) return res.send('Please upload a slug');


    console.log(req.body);
    const pos = new Posts({
        link: req.body.link,
        slug: req.body.slug,
        title: req.body.title,
        image: req.file.filename,
        HeadingTitle: req.body.HeadingTitle,
        datetime: req.body.datetime,
        smallTitle: req.body.smallTitle,
        MoviesContent: req.body.MoviesContent,
        allCategories: req.body.allCategories,

        container: req.body.container,
        harrypotter: req.body.harrypotter,
        brucelee: req.body.brucelee,
        dcextended: req.body.dcextended,
        fastandfurious: req.body.fastandfurious,
        jamesbond: req.body.jamesbond,
        marvel: req.body.marvel,
        spiderman: req.body.spiderman,
        starwar: req.body.starwar,
        xmen: req.body.xmen,

        quality: req.body.quality,
        P4K10BIT: req.body.P4K10BIT,
        P4KSDR: req.body.P4KSDR,
        P60FPS: req.body.P60FPS,
        P1080P264: req.body.P1080P264,
        P1080P10BIT: req.body.P1080P10BIT,
        P1080P60FPS: req.body.P1080P60FPS,
        P1080PHEVC: req.body.P1080PHEVC,
        P1080PUHD: req.body.P1080PUHD,
        P2160PHEVC: req.body.P2160PHEVC,
        PBlueray: req.body.PBlueray,
        PWEBDL: req.body.PWEBDL,

        movies: req.body.movies,
        hollywood: req.body.hollywood,
        bollywood: req.body.bollywood,
        southindian: req.body.southindian,
        marathi: req.body.marathi,
        bangla: req.body.bangla,
        shortmovie: req.body.shortmovie,

        webseries: req.body.webseries,
        englishweb: req.body.englishweb,
        hindiweb: req.body.hindiweb,
        banglaweb: req.body.banglaweb,
        marathiweb: req.body.marathiweb,
        koreanweb: req.body.koreanweb,
        documentry: req.body.documentry,
        award: req.body.award,
        hinditvshows: req.body.hinditvshows,
        englishtvshows: req.body.englishtvshows,

        more: req.body.more,
        c3dmovies: req.body.c3dmovies,
        moviesseries: req.body.moviesseries,
        tvseries: req.body.tvseries,

        imdb: req.body.imdb


    });

    pos.save((err, data) => {
        const image = `http://localhost:5000/${req.file.filename}`
        res.status(200).json({
            code: 200, message: 'post Added Sucessfully',
            addPosts: data,
            image: image,
        })

    })
});





// Get Single ID 
router.get('/posts/:id', (req, res, next) => {
    Posts.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});



// Update post 

router.put('/posts/edit/:id', (req, res, next) => {
    if (!req.file) return res.send('Please upload a file');
    const pos = {
        link: req.body.link,
        post: req.body,
        title: req.body.title,
        image: req.file.filename,
        HeadingTitle: req.body.HeadingTitle,
        datetime: req.body.datetime,
        smallTitle: req.body.smallTitle,
        MoviesContent: req.body.MoviesContent,
        allCategories: req.body.allCategories,




        container: req.body.container,
        harrypotter: req.body.harrypotter,
        brucelee: req.body.brucelee,
        dcextended: req.body.dcextended,
        fastandfurious: req.body.fastandfurious,
        jamesbond: req.body.jamesbond,
        marvel: req.body.marvel,
        spiderman: req.body.spiderman,
        starwar: req.body.starwar,
        xmen: req.body.xmen,

        quality: req.body.quality,
        P4K10BIT: req.body.P4K10BIT,
        P4KSDR: req.body.P4KSDR,
        P60FPS: req.body.P60FPS,
        P1080P264: req.body.P1080P264,
        P1080P10BIT: req.body.P1080P10BIT,
        P1080P60FPS: req.body.P1080P60FPS,
        P1080PHEVC: req.body.P1080PHEVC,
        P1080PUHD: req.body.P1080PUHD,
        P2160PHEVC: req.body.P2160PHEVC,
        PBlueray: req.body.PBlueray,
        PWEBDL: req.body.PWEBDL,

        movies: req.body.movies,
        hollywood: req.body.hollywood,
        bollywood: req.body.bollywood,
        southindian: req.body.southindian,
        marathi: req.body.marathi,
        bangla: req.body.bangla,
        shortmovie: req.body.shortmovie,

        webseries: req.body.webseries,
        englishweb: req.body.englishweb,
        hindiweb: req.body.hindiweb,
        banglaweb: req.body.banglaweb,
        marathiweb: req.body.marathiweb,
        koreanweb: req.body.koreanweb,
        documentry: req.body.documentry,
        award: req.body.award,
        hinditvshows: req.body.hinditvshows,
        englishtvshows: req.body.englishtvshows,

        more: req.body.more,
        c3dmovies: req.body.c3dmovies,
        moviesseries: req.body.moviesseries,
        tvseries: req.body.tvseries,

        imdb: req.body.imdb
    };

    Posts.findByIdAndUpdate(req.params.id, { $set: pos }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200).json({
                code: 200, message: 'post Updated Successfully',
                updatePosts: data
            })
        } else {
            console.log(err);
        }
    });
});


// Delete post 
router.delete('/posts/:id', (req, res, next) => {
    Posts.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.status(200).json({
                code: 200, message: 'post Deleted Successfully',
                deletePosts: data
            });
        } else {
            console.log(err);
        }
    });
})


// For Comment Section 


router
  .route("/api/v1/post/comment/:id")
  .put(auth, commentOnPost)
  .delete(auth, deleteComment);




module.exports = router