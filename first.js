// // const fs = require("fs");

// // fs.writeFile("sonu.txt", "sonu swain ", () => {});

// const sumRequestHandler = (req, res) => {
//   console.log("In Sum Request Handler", req.url);

//   const body = [];
//   let result;

//   req.on[("data", (chunk) => body.push(chunk))];

//   req.on("end", () => {
//     const bodyStr = Buffer.concat(body).toString();

//     const params = new URLSearchParams(bodyStr);

//     const body0bj = Object.fromEntries(params);

//     const result = Number(body0bj.first) + Number(body0bj.second);
//     console.log(result);
//   });

//   res.setHeader("Content-Type", "text/html");

//   res.write(`
// <html

// <head><title>Practise Set</title></head>

// <body>

// <h1>Your Sum is ${result}</h1>
// </body>
// <html>
// `);
//   return res.end();
// };

// exports.sumRequestHandler = sumRequestHandler;

const fs = require("fs");

fs.writeFileSync("user.txt", "sonu swain ", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
