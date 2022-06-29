const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello, Welcome");
    res.end();
  } else {
    res.write("Using some other domain");
    res.end();
  }
  //   res.write("Hello, World From Response");
  //   res.end();
});

server.listen("3000");
