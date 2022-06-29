const http = require("http");
const fileSystem = require("fs");
const server = http.createServer((req, res) => {
  const readStream = fileSystem.createReadStream("./folder/5.html");
  res.writeHead(200, { "Content-type": "text/html" });
  readStream.pipe(res);
});
server.listen("3000");
