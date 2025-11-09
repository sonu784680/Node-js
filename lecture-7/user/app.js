const sonu = require("http");
const requestHandler = require("./anotheruser");

const server = sonu.createServer(requestHandler);

server.listen(3001, () => {
  console.log(`the running server is an address http://localhost:3001`);
});
