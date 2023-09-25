const { Router } = require('express');
const { getPersonajes, getPersonaje, getFiltrarPersonajes } = require('../controllers/personajes');
const rutas = Router();

rutas.get('/personajes', getPersonajes);

rutas.get('/personaje/:id', getPersonaje);

rutas.get('/filtrar-personajes', getFiltrarPersonajes);

   

module.exports = rutas;