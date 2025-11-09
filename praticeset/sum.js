const sumRequestHandler = (req, res) => {
  console.log("in sum request handler", req.url);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    res.setHeader(`content-type`, `text/html`);
    res.write(`<html>
        <head><title>pratice-set </title></head>
        <body><h1>your sum is ${result} </h1>
        </body>
        </html>
        `);
    return res.end();
  });
};
exports.sumRequestHandler = sumRequestHandler;
