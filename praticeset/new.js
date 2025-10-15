const http = require("http");
const requestHandler = require("./handler");

const server = http.createServer(requestHandler);

server.listen(3003, () => {
  console.log("server running on address http://localhost:3002");
});
