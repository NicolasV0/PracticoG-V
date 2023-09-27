require('dotenv').config.js


const Server = require('./models/server');

const svr = new Server();


svr.listen();



