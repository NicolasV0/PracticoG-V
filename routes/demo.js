const { Router } = require('express');
const { getRegistrosJSON, getCaracterID, getFiltradoPorParametro } = require('../controllers/demo');

const rutas = Router();

rutas.get('/registrosJSON', getRegistrosJSON);
rutas.get('/caracterID/:id', getCaracterID);
rutas.get('/filtrado', getFiltradoPorParametro);


module.exports = rutas;