let http = require("http");

let server = http.createServer((req, res) => {
  res.write("<h1> hii from node javascript server </h1>");
  res.end();
});

server.listen(6790);
