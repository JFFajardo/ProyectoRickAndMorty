const http = require('http');
// const data = require('./utils/data')
const {getCharById} = require('./controllers/getCharById')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')){
        const id = Number(req.url.split('/').at(-1))
        // const character = data.find((char) => char.id == id);    
        // if(character){
        // res.writeHead(200, {'Content-Type': 'application/json'})
        // return res.end(JSON.stringify(character))
        // } 
        // else {
        //     res.writeHead(404, {'Content-Type': 'application/json'})
        //     return res.end(JSON.stringify({error: "Character not found" }))
        // }
    getCharById(res, id);
    }
}).listen(3001, "localhost")