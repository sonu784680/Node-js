//requeset and response
const sonu = require("http");

const server = sonu.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();//stop the event
  // res.setHeader(`content-type`, `text/html`);
  // res.write(`<html>`);
  // res.write(`<head><title>complete coding </title></head>`);
  // res.write(`<body><h1> sonu swain<h1><body>`);
  // res.write(`</html>`);
  // res.end(); // ->this code is how to pass the response
  //this code is how to routing
  // if(req.url==='/'){
  //   res.setHeader(`content-type`,`text/html`);
  //   res.write(`<html>`);
  //   res.write(`<head><title>complete coding </title></head>`);
  //   res.write(`<body><h1>wel-come home<h1><body>`);
  //   res.write(`</html>`);
  //   return res.end();
  //  } else if(req.url==='/products'){
  //   res.setHeader(`content-type`,`text/html`);
  //   res.write(`<html>`);
  //   res.write(`<head><title>complete coding </title></head>`);
  //   res.write(`<body><h1>shop our product<h1><body>`);
  //   res.write(`</html>`);
  //   return res.end();
  //  } else{
  //   res.setHeader(`content-type`,`text/html`);
  //   res.write(`<html>`);
  //   res.write(`<head><title>complete coding </title></head>`);
  //   res.write(`<body><h1> sonu swain<h1><body>`);  q
  //   res.write(`</html>`);
  //   return res.end();
  //  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`the running server is an address http://localhost:${PORT}`);
});
