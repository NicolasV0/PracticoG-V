const axios = require('axios');

const { request, response } = require('express');

const getPersonajes = (req = request ,res = response) => {
    const {id} = req.params;
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(({status,data,results,statusText}) => {
        console.log(status);
        res.status(200).json({
            status,
            data,
            results,
            statusText
        });
        
        /*for(let cont = 0; cont<= 10; cont ++ ){
            console.log('Producto: ');
            console.log(data.meals[cont].idMeal);
            console.log(data.meals[cont].strMeal);
            console.log(data.meals[cont].strCategory);
            console.log(data.meals[cont].strArea);
            console.log('----------------------')
        }*/
        
    })
    .catch((error) =>{
        console.log(response);
        res.status(401).json({msg:'not found'});
    });
   
}

const getPersonaje = (req = request ,res = response) =>{
    const {id} = req.params;
    console.log(id);
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({status,data,statusText}) => {
        res.status(200).json({
            status,
            data,
            statusText
            
        });
        
    })
    .catch((error) =>{
        console.log(response);
        res.status(401).json({msg:'not found'});
    });
};

const getFiltrarPersonajes = (req = request ,res = response) =>{
    const {id} = req.params;
    console.log(id);
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
        console.log(response);
        res.status(401).json({msg:'not found'});
    });
};




module.exports = {
    getPersonajes,
    getPersonaje,
    getFiltrarPersonajes

};