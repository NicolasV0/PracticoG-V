const axios = require('axios');

const { request, response } = require('express');

const url = 'https://rickandmortyapi.com/api/character';
const api = process.env.API_KEY;


const getPersonajes = (req = request ,res = response) => {
    const {id} = req.params;
    const {api_key} = req.query;
    if(api_key != api){
        res.status(401).json({msg:'Usuario no autorizado'});
        return;
    };
    axios.get(`${url}?api_key=${api}`)
    .then(({status,data,statusText}) => {
            const {results, page} = data; 
            res.status(200).json({
            status,
            results,
            page,
            statusText
            });
                         
        
    })
    .catch((error) =>{
        res.status(404).json({msg:'not found'});
        
    });
}

const getPersonaje = (req = request ,res = response) =>{
    const {id} = req.params;
    const {api_key} = req.query;

    if(api_key != api){
        res.status(401).json({msg:'Usuario no autorizado'});
        return;
    };
    axios.get(`${url}/${id}?api_key=${api}`)
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
    const {api_key} = req.query;
    if(api_key != api){
        res.status(401).json({msg:'Usuario no autorizado'});
        return;
    };
    axios.get(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=${status}&species=${species}&api_key=${api}`)
    .then(({status,data,statusText}) => {
        const {results} = data; 
        res.status(200).json({
            status,
            results,
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