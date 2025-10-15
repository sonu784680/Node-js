const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.write("<h1>Welcome to Home</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to Men's Section</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to Kids Section</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to Women's Section</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Your cart is empty</h1>");
    return res.end();
  }
  //   else {
  //     res.write("<h1>404 page not found</h1>");
  //   }

  res.write("<html >");
  res.write("<head><title>myntra</title></head>");
  res.write(
    '<body><head><nav><ul><li><a href="/home">home</a></li><li><a href="/men">men</a></li><li><a href="/kids">kids</a></li><li><a href="/women">women</a></li><li><a href="/cart">cart</a></li></ul></nav></head></body>'
  );
  res.write("</html >");
  res.end();
});

server.listen(3002, () => {
  console.log("server running on address http://localhost:3002");
});
