const http = require("http");

const server = http.createServer((req, res) => {});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`the running server is an address http://localhost:${PORT} `);
});
