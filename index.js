//  require http:
const http = require("http");
const { friendsList } = require("./uderscore");

//  require url modules:
const url = require("url");

// port:
const port = 5000;

// underscore js:  - import from 'underscore.js' module .
console.log(friendsList);

//  create server :

const server = http.createServer((req, res) => {
   // const url = req.url;
   // if (url === "/") {
   //    res.writeHead(200, { "content-type": "text/html" });
   //    res.write("<h1>Home page </h1>");
   //    res.end();
   // } else if (url === "/contact") {
   //    res.writeHead(200, { "content-type": "text/html" });
   //    res.write("<p>Contact us page</p>");
   //    res.end();
   // } else if (url === "/users") {
   //    const users = [];
   //    res.writeHead(200, { "content-type": "application/json" });
   //    res.write(JSON.stringify([{ id: 1, name: "Mostafizur Rahaman" }]));
   //    res.end();
   // } else {
   //    res.writeHead(200, { "content-type": "application/json" });
   //    res.write(JSON.stringify({ reslut: "Your are an unauthorized user" }));
   //    res.end();
   // }
   const addressURL =
      "http://localhost:5000/users?id=1&name=mostafiz&age=21#footer";
   const parsedURL = url.parse(addressURL, true);
   const query = parsedURL.query;
   const pathname = parsedURL.pathname;
   const path = parsedURL.path;
   const protocol = parsedURL.protocol;
   const search = parsedURL.search;
   const hostname = parsedURL.hostname;
   const host = parsedURL.host;
   const href = parsedURL.href;
   console.log(query, pathname, path, protocol, search, host, hostname, href);
   res.writeHead(200, { "content-type": "application/json" });
   res.write(JSON.stringify(parsedURL));
   res.end();
});

//  listen the server :

server.listen(port, () => console.log("server is running on " + port));
