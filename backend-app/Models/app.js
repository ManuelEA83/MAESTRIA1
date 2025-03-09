const mongoose = require('mongoose');
const TvSeries = require('./series.model'); // Asegúrate de usar la ruta correcta del archivo donde definiste el modelo
// Crear una serie de ejemplo
const nuevaSerie = new TvSeries(
    {
        "name": "Manuel Escamilla",
        "original_name": "Angela's Eyes",
        "overview": "FBI agent Angela Clinton has the exceptional gift of knowing when someone is lying...",
        "tagline": "Meet the FBI's best lie detector.",
        "in_production": false,
        "status": "Ended",
        "original_language": "en",
        "origin_country": ["US"],
        "created_by": [
            {
                "id": 1596827,
                "name": "Dan McDermott",
                "_id": "6457d26c7b901e08b1418762"
            }
        ],
        "first_air_date": "2006-07-16",
        "last_air_date": "2006-10-15",
        "number_of_episodes": 13,
        "number_of_seasons": 1,
        "production_companies": [
            {
                "id": 86426,
                "name": "Bull's Eyes Entertainment",
                "logo_path": null,
                "origin_country": "",
                "_id": "6457d26c7b901e08b1418763"
            }
        ],
        "poster_path": "/o5jgPizvKMRYKUB2oOGE0Hglows.jpg",
        "genres": ["Drama", "Action & Adventure"],
        "vote_average": 7,
        "vote_count": 2,
        "popularity": 5.486
    }
    
   );
  
  // Guardar la serie en la base de datos
  nuevaSerie.save()
    .then(() => {
      console.log('Serie guardada exitosamente');
    })
    .catch((error) => {
      console.error('Error al guardar la serie:', error);
    });
