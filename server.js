var static = require('node-static'),
	http = require('http'),
	livereload = require('livereload'),
	ngrok = require('ngrok'),
	port = 5454; //<== number port here

// variable for static files in server
var fileServer = new static.Server('./public');
var live = livereload.createServer();
		live.watch(__dirname + "/public");
// create you server int port 5454
http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(port);
// here connect this proyect with ngrok
ngrok.connect(port,function (err, url){
    	if (err !== null) {
    		console.log('Error');
    	}
      	console.log('your server is in http://localhost:'+port);
    	console.log('Ngrok URL:  '+ url);
    });