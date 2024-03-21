const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./coffee/index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain'});
            res.end(`Internal Server Error: ${err}`);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data);
        }
    })
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Server is running successfully.");
})