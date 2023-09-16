const { Router } = require('express');
const { getEstrenos, getActores, getPeliculas, getPelicula, getOrigenNombre, getDirector } = require('../controllers/demo');
const rutas = Router();

rutas.get('/peliculas', getPeliculas);

rutas.get('/pelicula/:id', getPelicula);

rutas.get('/estrenos', getEstrenos);

rutas.get('/actores', getActores);

rutas.get('/nombre/:name', getOrigenNombre);

rutas.get('/directores/:name', getDirector);



/*rutas.get('/peliculas', function(req,res){
    //res.send('demo')});
    res.json({name:'peliculas'})});*/
    

module.exports = rutas;