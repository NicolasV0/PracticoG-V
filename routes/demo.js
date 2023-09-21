const { Router } = require('express');
const { getPersonajes, getPersonaje, getFiltrarPersonajes } = require('../controllers/demo');
const rutas = Router();

rutas.get('/rickandmorty/personajes', getPersonajes);

rutas.get('/rickandmorty/personaje/:id', getPersonaje);

rutas.get('/rickandmorty', getFiltrarPersonajes);

/*rutas.get('/peliculas', function(req,res){
    //res.send('demo')});
    res.json({name:'peliculas'})});*/
    

module.exports = rutas;