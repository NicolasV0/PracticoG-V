require('dotenv').config.js


const Server = require('./models/server');

const svr = new Server();


svr.listen();


//2. Visualización de un registro en particular (param id)

//3. Listado de registros en formato json que pueda filtrarse a través de query params. (categoría, idioma,
//álbum, género, etc.)

//4. En caso de entrega grupal, cada alumno deberá cubrir los puntos del 1 al 3 en su entrega.

//Aclaración: Devolver los status code en cada request (200, 401, 404 ,etc.)
