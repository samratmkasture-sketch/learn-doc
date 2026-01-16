const http = require("http");
const PORT = 3000;

const url = require("url");
let users = [];
const server = http.createServer((req, res) => {
  if (req.url == "/favicon.ico") {
    res.end();
  }
  const urlParts = url.parse(req.url, true);
  const { query, pathname } = urlParts;

  if (pathname == "/" && req.method == "GET") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Home Page");
  } else if (pathname == "/" && req.method == "POST") {
    let requestBody = "";
    req.on("data", (chunk) => {
      requestBody += chunk;
    });
    req.on("end", () => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      console.log(requestBody);
      users.push(JSON.parse(requestBody));
      res.end(JSON.stringify(users));
    });
  } else if (pathname == "/" && req.method == "DELETE") {
    let requestBody = "";
    req.on("data", (chunk) => {
      requestBody += chunk;
    });
    req.on("end", () => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      let { name } = requestBody;
      users = users.filter((obj) => obj.name != name);

      res.end(JSON.stringify(users));
    });
  } else if (pathname == "/about" && req.method == "GET") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("About Page");
  }
  //   res.writeHead(200, {
  //     "Content-Type": "text/plain",
  //     // "Content-Type":"application/json"
  //   });
  //   res.end("Hello World");
});

server.listen(PORT, () => {
  console.log(`Server starts listening on port ${PORT}`);
});
