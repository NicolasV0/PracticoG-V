const axios = require('axios');

const { request, response } = require('express');


const getPeliculas = (req = request ,res = response) => {
    //const queryParam = req.query;
    const {anio, ...resto} = req.query;
    console.log(req.query);
    console.log(resto);
    res.status(200).json({name:`peliculas del año: ${anio}`});
}

const getPelicula = (req = request ,res = response) =>{
    const {id} =  req.params;
    res.status(200).json({name:`peliculas: ${id}`})};


const getEstrenos = (req,res) => {res.json({name:'estrenos'})};

const getActores = (req,res) => {res.json({name:'actores'})};

const getOrigenNombre = (req = request ,res = response) => {
    const {name} =  req.params;
    console.log(name);
    axios.get(`https://api.nationalize.io/?name=${name}`)
    .then(({status,data,statusText}) => {
        res.status(200).json({
            status,
            data,
            statusText,
            name
        });
    })
    .catch((error) =>{
        console.log(response);
        res.status(401).json({msg:'not found'});
    });
}
    
const getDirector = (req = request ,res = response) =>{
    const {name} =  req.params;
    res.status(200).json({name:`Director: ${name}`})};


module.exports = {
    getPeliculas,
    getActores,
    getEstrenos,
    getPelicula,
    getOrigenNombre,
    getDirector

};