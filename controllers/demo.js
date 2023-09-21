const axios = require('axios');
const { request, response} = require('express');

//Listado de registros en formato json que muestre 50 o más registros.
const getRegistrosJSON = (req = request, res = response) => {

    console.log(req.params);

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

    console.log(req.params);
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



module.exports = {
    getRegistrosJSON,
    getCaracterID,
};