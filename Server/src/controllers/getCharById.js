const axios = require('axios');

function getCharById (res, id) {

    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({data}) => {
            const character ={
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            };        
        res.writeHead(200, {'Content-Type': 'application/json'})
        return res.end(JSON.stringify(character))
        })
                
        .catch((error)=> {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        return res.end(error.message)
         })}

module.exports = {getCharById};