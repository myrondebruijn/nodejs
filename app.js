var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	
	if (req.url === "/") {
		fs.createReadStream(__dirname + '/index.htm').pipe(res);
	}
	
	else if (req.url === '/login_process.php') {
		fs.createReadStream(__dirname + '/home.htm').pipe(res);
	}
	
	else if (req.url  === '/api') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		var obj = {
			firstname: 'myron',
			lastname: 'de bruijn'
		};
		res.end(JSON.stringify(obj));
	}
	else {
		res.writeHead(404); {
		fs.createReadStream(__dirname + '/error.htm').pipe(res);
		}
		
	}
}).listen(1337, '127.0.0.1');