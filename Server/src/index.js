const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end('Hola, creaste un server O.O')
   

    
}).listen(3005, "localhost")