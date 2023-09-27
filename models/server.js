const express = require('express');
const cors = require('cors')


class Server {
    
    constructor(){

        this.port = process.env.PORT || 3000;
        this.app = express();

        this.middleware();
        this.routers();

    }   

    middleware(){

        this.app.use(cors());
        this.app.use(express.static('public'));

    }

    routers(){

        this.app.get('/', function (req, res) {
            res.send('Hello World')
        });   

        this.app.use('/api', require ('../routes/caracteres'));

        this.app.all('*', (req, res) => {
            res.status(404).json({message:'404 Page Not Found'})
        })

        
    }



    listen(){

        this.app.listen(this.port, () =>{
            console.log(`App escuchando el el puerto ${this.port}`);
        });

    }


}

module.exports = Server;