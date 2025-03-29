const TvSeries = require("../Models/tv_series.model");
//Funciona para recuperar la coleccion de series
const getTvSeries = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10; // Si no se envía `limit`, obtiene 10 por defecto
        const tvSeries = await TvSeries.find().limit(limit);
        res.status(200).json(tvSeries);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
}

// Función para recuperar una serie por _id
const getTvSeriesById = async (req, res) => {
    try {
        // id proviene de una variable en la URL
        const { id } = req.params;
        const tv_serie = await TvSeries.find({'_id':id});
        res.status(200).json(tv_serie);
    } catch (error) {
        res.status(500).json({
            status:"error:"+ error.message
        });
    }
}

// Funcion para agregar un elemento a la coleccion
const setTvSeries = async(req, res)=> {
    try{
        const SimpleTvSeries = await TvSeries.create(req.body);
        res.status(200).json(SimpleTvSeries);
    } catch (error) {
        res.status(500).json({
            status:"error:"+ error.message
        });
    }
}

// Funcion para actualizar un elemento e la coleccion usando su _id
const updateTvSeries = async(req, res)=> {
    try {
        const {id} = req.params;
        const UpdatedTvSeries= await TvSeries.findByIdAndUpdate(id,req.body);
        if (!UpdatedTvSeries) {
            return res.status(400).json({
                status: "error",
                message: "Document no found"
            });

        }
        const TvSerie= await TvSeries.find({'_id':id});
        res.status(200).json(TvSerie);
    }  catch(error) {
        res.status(500).json({
            status: "error:" + error.message
        });
    }
}

// Función para eliminar una serie por _id
const deleteTvSeriesById = async (req, res) => {
    try {
        const { id } = req.params;
        const seriesToDelete = TvSeries.find({'_id':id});
        if(!seriesToDelete){
            res.status(400).json({
                message:"Document not found"
            });
        }
        const deletedTvSeries  = await TvSeries.deleteOne({'_id':id});
        res.status(200).json({
            message:"Document deleted"
         });
    } catch (error){
        res.status(500).json({
            status:"error:" + error.message
        });
    }
}


module.exports = {
    getTvSeries,
    getTvSeriesById,
    setTvSeries,
    updateTvSeries,
    deleteTvSeriesById,
};
