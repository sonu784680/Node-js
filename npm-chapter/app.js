const sonu = require("http");

const server = sonu.createServer((req, res) => {});

const port = 3002;

server.listen(port, () => {
  console.log(`the running server is an address http://localhost:${port}`);
});
