//  require http modules :
const http = require("http");

//  define a port :
const port = 5000;

// create a server :
const server = http.createServer((req, res) => {
   console.log(req.url);
   if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });

      res.end();
   } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Contact Us Page</h1>");
      res.end();
   } else {
      res.writeHead(401, { "Content-Type": "application/json" });
      res.write(
         JSON.stringify({
            resut: "Data now found for your routes",
            success: false,
         })
      );
      res.end();
   }
});

//  listen the server:
server.listen(port, () => {
   console.log("server is running now port : 5000");
});
