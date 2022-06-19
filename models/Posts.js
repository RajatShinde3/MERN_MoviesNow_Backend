const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema;

const ButtonSchema = new mongoose.Schema({
    Button: { type: String },
});


const DownloadHeading = new mongoose.Schema({
    DownloadHeading: { type: String },
    Buttons: [ButtonSchema],
});


const postSchema = new mongoose.Schema(
    {
        link: {
            type: String,
            required: true

        },
        title: {
            type: String,
            required: true

        },
        image: {
            type: String,
            required: true

        },
        HeadingTitle: {
            type: String,
            required: true

        },
        datetime: {
            type: String,
            required: true

        },
        smallTitle: {
            type: String,
            required: true

        },
        MoviesContent: {
            type: String,
            required: true
        },

        allCategories: {
            type: String,
            required: true

        },
        Download: [DownloadHeading],

        comments: [
            {
              user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
              },
              comment: {
                type: String,
                required: true,
              },
            },
          ],

        date: {
            type: Date,
            default: Date.now
        },

        slug: {
            type: String,
            required: true,
            unique: true
        },

        container: {
            type: String

        },
        harrypotter: {
            type: String

        },
        brucelee: {
            type: String

        },
        dcextended: {
            type: String

        },
        fastandfurious: {
            type: String

        },
        jamesbond: {
            type: String

        },
        marvel: {
            type: String

        },
        spiderman: {
            type: String

        },
        starwar: {
            type: String

        },
        xmen: {
            type: String

        },
        quality: {
            type: String

        },
        P4K10BIT: {
            type: String

        },
        P4KSDR: {
            type: String

        },
        P60FPS: {
            type: String

        },
        P1080P264: {
            type: String

        },
        P1080P10BIT: {
            type: String

        },
        P1080P60FPS: {
            type: String

        },
        P1080PHEVC: {
            type: String

        },
        P1080PUHD: {
            type: String

        },
        P2160PHEVC: {
            type: String

        },
        PBlueray: {
            type: String

        },
        PWEBDL: {
            type: String

        },
        movies: {
            type: String

        },
        hollywood: {
            type: String

        },
        bollywood: {
            type: String

        },
        southindian: {
            type: String

        },
        marathi: {
            type: String

        },
        bangla: {
            type: String

        },
        shortmovie: {
            type: String

        },
        webseries: {
            type: String

        },
        englishweb: {
            type: String

        },
        hindiweb: {
            type: String

        },
        banglaweb: {
            type: String

        },
        marathiweb: {
            type: String

        },
        koreanweb: {
            type: String

        },
        documentry: {
            type: String

        },
        award: {
            type: String

        },
        hinditvshows: {
            type: String

        },
        englishtvshows: {
            type: String

        },
        more: {
            type: String

        },
        c3dmovies: {
            type: String

        },
        moviesseries: {
            type: String

        },
        tvseries: {
            type: String

        },
        imdb: {
            type: String

        }


    }, { timestamps: true });

const Posts = mongoose.model('Posts', postSchema);


module.exports = { Posts }