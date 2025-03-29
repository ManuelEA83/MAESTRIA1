//Invocacion de la libreria express
const express = require('express');
//invocacion de la libreria mongoose para la conexion a BD de mongodb 
const mongoose = require('mongoose');
// Importar las rutas de la coleccion  Tvseries
const TvSeriesRoute = require('./routes/tv_series.route');


//Inicializacion  de la aplicacion basada en express
const app= express();
// Incorporando el parser de JSON
app.use( express.json() );



//Tareas CRUD y sus metodos
// C - create (crear, agregar)-- post
// R - Read (Leer o recuperar)-- get
// U - Update (actualizar) - put
// D - Delete (borrar o eliminar) - delete

//Endpoint por defecto 
app.get('/',(req, res)=>{
    res.send ('Bienvenido a mi servidor de APIs');
});
// Endpoint de la coleccion Tvseries
app.use('/api/tv_series',TvSeriesRoute);


//Definiendo la conexion a BD a travex de mongoose
//La definicion a BD es de tipo promesa
mongoose.connect('mongodb+srv://utp0159300:198703198703@cluster0.ttxxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"')
.then(()=>{
    console.log('Conectado a la BD de manera exitosa');
    const PORT = process.env.PORT || 3000;  // Usa el puerto que Render asigna
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//app.listen(3000,()=> {
  //  console.log('Servidor respondio en el puerto 3000');
//});
})
.catch(()=>console.log('Ocurrio un problema al conectar a la BD'))
