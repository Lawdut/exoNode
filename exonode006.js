var http = require("http");
var fs = require("fs"); 

//---------------------------------------------------------------------------//
//EN MODE SYNCHRONE
//---------------------------------------------------------------------------//

/*http.createServer(function(request,response) {    
    data = fs.readFileSync('input.txt');
    response.writeHead(200, { 'Content-Type' : 'text/pain' });
    response.end(data.toString())}).listen(8081);
    //request.toString();*/ 

//---------------------------------------------------------------------------//
//EN MODE ASYNCHRONE
//---------------------------------------------------------------------------//

http.createServer(function(request,response) {    
    data = fs.readFile('input.txt', function(err, data){
        if(err) {
            console.log(err);
        
        }
    data.toString();
    response.writeHead(200, { 'Content-Type' : 'text/plain' });
    response.end(data);
    });
    })
    .listen(8081);