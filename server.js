const http = require("http");
const fs = require("fs");
// const lodash = require("lodash");

const server = http.createServer((req, res) => {
    console.log(req.method);

    // routing
    let path = "./coffee/";
    switch(req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        // redirects to home page
        case "/order":
            res.statusCode = 301;
            res.setHeader("Location", "/");
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    // sending a response to client browser
    res.setHeader("Content-Type", "text/html");
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
        }
        res.end();
    })
    
});

// localhost >>> 127.0.0.1 
server.listen(3000, "localhost", () => {
    console.log("Listening for requests on port 3000.")
})