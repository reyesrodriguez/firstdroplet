var net = require('net');
var port = 3000;
var fs = require('fs');

var responses = ["You are right", "You are wrong", "there is no way"];

var server = net.createServer(function(c){
	console.log('client connected');
	c.write("Hello I am an Eight Ball, ask me a question!")
	c.on('data', function(data){
		var input = data.toString().trim()
		var response = responses[Math.floor(Math.random()*responses.length)];
		c.write(response.toString().trim())
		if (input === '/\?//')
			c.write("hello")
		//console.log(data.toString().trim());
	})

	c.on('end', function(){
		console.log('client disconnected')
	})
});

server.listen(port, function(){
	console.log('listening on ' + port);
})