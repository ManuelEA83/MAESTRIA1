const mongoose = require('mongoose');

const TvSeriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    original_name: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    tagline: {
        type: String
    },
    in_production: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    original_language: {
        type: String,
        required: true
    },
    origin_country: {
        type: [String], // Array de strings
        required: true
    },
    created_by: [{
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }],
    first_air_date: {
        type: String, // Puede ser Date si se quiere manejar como fecha real
        required: true
    },
    last_air_date: {
        type: String,
        required: true
    },
    number_of_episodes: {
        type: Number,
        required: true
    },
    number_of_seasons: {
        type: Number,
        required: true
    },
    production_companies: [{
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        logo_path: {
            type: String,
            default: null
        },
        origin_country: {
            type: String
        },
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }],
    poster_path: {
        type: String
    },
    genres: [{
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }],
    vote_average: {
        type: Number,
        required: true
    },
    vote_count: {
        type: Number,
        required: true
    },
    popularity: {
        type: Number,
        required: true
    }
});

const TvSeries = mongoose.model('TvSeries', TvSeriesSchema,'series_tv');

module.exports = TvSeries;
