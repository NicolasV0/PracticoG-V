const axios = require('axios');

const { request, response } = require('express');



const getPersonajes = (req = request ,res = response) => {
    const {id} = req.params;
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(({status,data,results,statusText}) => {
            res.status(200).json({
            status,
            data,
            results,
            statusText
            });
                         
        
    })
    .catch((error) =>{
        res.status(404).json({msg:'not found'});
        
    });
}

const getPersonaje = (req = request ,res = response) =>{
    const {id} = req.params;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({status,data,statusText}) => {
        res.status(200).json({
            status,
            data,
            statusText
            
        });
       
    })
    .catch((error) =>{
        res.status(404).json({msg:'not found'});
        
    });
};

const getFiltrarPersonajes = (req = request ,res = response) =>{

    const {nombre} = req.query;
    const {status} = req.query;
    const {species} = req.query;
    axios.get(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=${status}&species=${species}`)
    .then(({status,data,statusText}) => {
        res.status(200).json({
            status,
            data,
            statusText
            
        });
        
    })
    .catch((error) =>{
        res.status(404).json({msg:'not found'});
    });
};




module.exports = {
    getPersonajes,
    getPersonaje,
    getFiltrarPersonajes

};