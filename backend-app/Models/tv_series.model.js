// Definiendo un objeto de tipo mongoose
const mongoose = require ('mongoose');
//definiendo la estructura del documento tv_series
const TvSeriesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true  
    },
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
        type: String,
        default: ""
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
        type: [String],
        required: true
    },
    created_by: {
        type: [String],
        default: []
    },
    first_air_date: {
        type: Date,
        required: true
    },
    last_air_date: {
        type: Date
    },
    number_of_episodes: {
        type: Number,
        required: true
    },
    number_of_seasons: {
        type: Number,
        required: true
    },
    production_companies: {
        type: [String],
        default: []
    },
    poster_path: {
        type: String
    },
    genres: {
        type: [String],
        required: true
    },
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

// Exportando el modelo
const TvSeries = mongoose.model('TvSeries', TvSeriesSchema);
module.exports = TvSeries;