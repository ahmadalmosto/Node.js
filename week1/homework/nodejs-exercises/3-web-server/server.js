var http = require("http");
var fs = require("fs");

//create a server
let server = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("./index.js", null, function (error, data) {
      if (!error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }else{
        res.send('Not Found');
        res.status(404)
      }
    });
  } else if (req.url === "/script.js") {
    fs.readFile("./script.js", null, function (error, data) {
      if (!error) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(data);
      }else{
        res.send('Not Found');
        res.status(404)
      }
    });
  } else if (req.url === "/style.css") {
    fs.readFile("/style.css", null, function (error, data) {
      if (!error) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }else{
        res.send('Not Found');
        res.status(404)
      }
    });
  } else {
    res.send('Not Found');
    res.status(404);
  }
});
server.listen(3000); // The server listens on port 3000
