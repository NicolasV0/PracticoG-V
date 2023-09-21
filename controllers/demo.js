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
        res.status(401).json({msg:'not found'});
        
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
        res.status(401).json({msg:'not found'});
        
    });
};

const getFiltrarPersonajes = (req = request ,res = response) =>{
    const {id} = req.params;
    const {id2} = req.params;
    axios.get(`https://rickandmortyapi.com/api/character/?${id}=rick&status=${id2}`)
    .then(({status,data,statusText}) => {
        res.status(200).json({
            status,
            data,
            statusText
            
        });
        
    })
    .catch((error) =>{
        res.status(401).json({msg:'not found'});
    });
};




module.exports = {
    getPersonajes,
    getPersonaje,
    getFiltrarPersonajes

};