var n = 0;
var http = require('http');
http.createServer(function (req, res){
    if (++n > 4) { a }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("result:" + n);
}).listen(process.env.PORT, process.env.IP);
console.log(process.env.IP + ":" + process.env.PORT);
