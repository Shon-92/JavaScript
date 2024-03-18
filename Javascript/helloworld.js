var http = require('http');
var date = require('./myfirstmodule.js'); // links file that returns the current time
var url = require('url');


//create server object
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'}); // first argument is status code. 200 means ok. the second is an object containing response
    
    res.write('The current time is ' + date.myDateTime()+ ' '); // write a response to the client
    
    var q = url.parse(req.url, true).query;
    var text = q.year + ' ' + q.month;

    res.write(req.url); //writes whatever is after / in the url ex localhost8080/summer writes summer

    res.end(text); // end the response
}).listen(8080); // the server object listens on port 8080


