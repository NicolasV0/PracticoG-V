const { Router } = require('express');
const { getRegistrosJSON, getCaracterID, getFiltradoCaracter } = require('../controllers/demo');

const rutas = Router();

rutas.get('/registrosJSON', getRegistrosJSON);
rutas.get('/caracterID/:id', getCaracterID);
rutas.get('/filtrado', getFiltradoCaracter);


module.exports = rutas;