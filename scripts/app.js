var circle = require('./circle.js');
console.log("the radius of a circle is 2: "+circle.area(2));
var square= require('./square.js');
console.log("side of a square is 8: "+square.area(2));
var rocker = require('./rocker.js');
console.log('%s is %s',rocker.name , rocker.age);
var rock = require('./square.js');
console.log('%s is %s',rock.name,rock.age);

var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
var age1 = require('./moduleexports_as_a_class');
var r = new age1('Aman',25);
r.sum();
var arr= require('./moduleexports_as_an_array.js');
console.log('my array is '+arr[2]);
}






