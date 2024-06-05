const fs = require("fs");
const url = require("url");
const http = require("http");

http.createServer((req, res) => {

    var path = url.parse(req.url, true).pathname;
    switch (path) {
        case "/":
            path = "/index";
        case "/about":
        case "/contact-us":
            res.statusCode = 200;
            break;
        default:
            path = "/404";
            res.statusCode = 404;
            break;
    }

    fs.readFile("./html-files" + path + ".html", (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end(`We encountered an issue: ${err}`);
        }
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })

}).listen(8080, () => {
    console.log("Server is listening...");
});

