const axios = require('axios');
const { request, response} = require('express');

//Listado de registros en formato json que muestre 50 o más registros.
const getRegistrosJSON = (req = request, res = response) => {


    axios.get(`https://rickandmortyapi.com/api/location/`)
        .then(({ status, data, statusText }) => {
            // handle success
            console.log({ status, data, statusText });
            res.status(200).json({
                status,
                data,
                statusText,
            });
        })
        
        .catch((error)=>{
            // handle error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        
}


//2. Visualización de un registro en particular (param id)
const getCaracterID = (req = request, res = response) => {

    
    const { id } = req.params;

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ status, data, statusText }) => {
            // handle success
            console.log({ status, data, statusText });
            res.status(200).json({
                status,
                data,
                statusText,
                id
            });
        })
        
        .catch((error)=>{
            // handle error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        
}

//3. Listado de registros en formato json que pueda filtrarse a través de query params.
const getFiltradoCaracter = (req = request, res = response) => { 
    
    

    axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(({ status, data, statusText }) => {
            // handle success
            

            const query = req.query;
            const key = Object.keys(query)[0];
            
            console.log(query[key]);
            console.log(data.results.filter((i) => i[key].includes(query[key])));
            

            //Filtra dependiendo el query que pasemos, compara el atributo con el valor que hacemos el request
            //Lo compara con todos los personajes y devuelve el match
            res.status(200).json({
                
                status:200,
                data: data.results.filter((i) => i[key].includes(query[key])),
                msg: '200 ok'

                })
        })

        .catch((error)=>{
            // handle error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        
}



module.exports = {
    getRegistrosJSON,
    getCaracterID,
    getFiltradoCaracter,
};
