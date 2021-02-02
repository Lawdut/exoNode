var http = require("http");
var fs = require("fs"); 



http.createServer(function(request,response) {
    data = fs.readFileSync('input.txt');
    response.writeHead(200, { 'Content-Type' : 'text/html' });
    response.end(data.toString())}).listen(8081);
    //request.toString();
