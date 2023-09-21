const { Router } = require('express');
const { getRegistrosJSON, getCaracterID } = require('../controllers/demo');

const rutas = Router();

rutas.get('/registrosJSON', getRegistrosJSON);
rutas.get('/caracterID/:id', getRegistrosJSON);


module.exports = rutas;