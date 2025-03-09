const express =require('express');
const router = express.Router();
const {
    getTvSeries,
    getTvSeriesById,
    setTvSeries,
    updateTvSeries,
    deleteTvSeriesById
} = require('../controllers/tv_series.controller');

// const TvSeries = require('../series.model');
// const { get } = require('mongoose');

// EndPoint para recuperar toda la coleccion de TvSeries
router.get('/all', getTvSeries);
// Endpoint para recuperar un elemento de la coleccion Tvseries
router.get('/Byid/:id',getTvSeriesById);
// EndPoint para agregar un nuevo elemento a la coleccion Tvseries
router.post('/add',setTvSeries);
// Endpoint para la actualizacion de un elemnto de la coleccion Tvseries
router.put('/modify/:id',updateTvSeries);
//Endpoint paa la eliminacion de un elemento de la coleccion Tvseries
router.delete('/less/:id',deleteTvSeriesById);

module.exports= router;
