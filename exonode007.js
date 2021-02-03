var http = require("http");
var fs = require("fs"); 

request = fs.readFileSync('exonode007.html');

http.createServer(function(request,response) {
    data = fs.readFile('exonode007.html', function(err,data){
        if(err){
            console.log(err);
        }
        data.toString();
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        response.end(data);
        });
        })
        .listen(8081);