var http = require("http");
var fs = require("fs"); 

request = fs.readFileSync('exonode007.html');

http.createServer(function(request,response) {
    data = fs.readFileSync('exonode007.html');
    response.writeHead(200, { 'Content-Type' : 'text/html' });
    response.end(data.toString())}).listen(8081);