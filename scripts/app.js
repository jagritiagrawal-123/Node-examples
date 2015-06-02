var http = require("http");

// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
http.createServer(function (request, response) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Hello");
		response.end();
	}).listen(3000);
console.log("Server running at localhost:3000");