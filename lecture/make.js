const http = require("http");
const userRequesthandler = require("./made");

const server = http.createServer(userRequesthandler);

const sonu = 3000;
server.listen(sonu, () => {
  console.log(`the running server is an address http://localhost:${sonu} `);
});
