const express = require('express');
const cors = require('cors');


class Server{

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

    routers (){
      
        this.app.use('/api/v1/rickandmorty', require('../routes/personajes'));
        this.app.all('*', (req, res) => {
            res.status(401).json({message:'401 Page Not Found'})
        })

    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('App escuchando puerto')
        });
    }

}


module.exports = Server;