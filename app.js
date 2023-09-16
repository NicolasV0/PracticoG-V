require('dotenv').config()


const Server = require('./models/server');
const svr = new Server();
svr.listen();


