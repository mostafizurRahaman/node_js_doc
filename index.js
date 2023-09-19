//  require http:
const http = require("http");
const { friendsList } = require("./uderscore");

//  require url modules:
const url = require("url");

// port:
const port = 5000;

//   import fs modules:
const fs = require("fs");

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

   /*  const addressURL =
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
   res.end(); */

   //  asynchronously read file:
   // fs.readFile("data.txt", (err, data) => {
   //    if (err) {
   //       res.writeHead(403, { "content-type": "text/html" });
   //       res.write("Data not found");
   //       res.end();
   //    } else {
   //       const text = data;
   //       //  convert buffer to string with toString():
   //       const plaintext = data.toString();
   //       console.log(plaintext);
   //       //  convert plain text to arrary :
   //       const textArr = plaintext.split(". ");
   //       const tagArray = textArr.map(
   //          (i) =>
   //             `<p class="font-size: 10px; color: red; background: black; ">${i}</p>`
   //       );

   //       let normaltext = " ";
   //       for (let i of tagArray) {
   //          normaltext = normaltext + ` <br />` + i;
   //       }

   //       res.writeHead(200, { "content-type": "text/html" });
   //       res.write(normaltext);
   //       res.end();
   //    }
   // });

   // const data = fs.readFileSync("data.txt");
   // console.log(data.toString());
   // res.write(data);
   // res.end();

   // fs.writeFile("./data.txt", "Mostafizur Rahaman Fahim.", (err, data) => {
   //    if (err) {
   //       res.writeHead(401, { "content-type": "text/html" });
   //       res.write("Data is edited now");
   //       res.end();
   //    } else {
   //       res.writeHead(200, { "content-type": "text/html" });
   //       console.log(data);
   //       res.write(`Data not found`);
   //       res.end();
   //    }
   // });

   // const data = fs.writeFileSync(
   //    "./data.txt",
   //    "I am a mern stack developer. I love to code on vscode with react, express mongodb and nodejs"
   // );

   // console.log(data);
   // res.writeHead(200, { "content-type": "text/html" });
   // res.write(data);
   // res.end();

   // fs.rename("data.txt", "datafile.txt", () => {
   //    console.log("file renamed successfully.");
   //    res.writeHead(200, { "content-type": "text/html" });
   //    res.write("file renamed successfully");
   //    res.end();
   // });

   // fs.renameSync("datafile.txt", "mydata.txt");
   // console.log("file rename succedded");
   // fs.readFile("./mydata.txt", (err, data) => {
   //    if (err) {
   //       console.log("file failed to read");
   //    } else {
   //       console.log(data.toString());
   //       res.writeHead(200, { "content-type": "text/html" });
   //       res.write(data);
   //       res.end();
   //    }
   // });

   // fs.exists("./data.txt", (exits) => {
   //    res.writeHead(200, { "content-type": "text/html" });
   //    if (exits) {
   //       res.write("my data file is text ");
   //    } else {
   //       res.write("my data file not exits");
   //    }
   //    res.end();
   // });

   // const fileExits = fs.existsSync("data.txt");
   // if (fileExits) {
   //    console.log("mostafiz");
   // } else {
   //    console.log("fahim");
   // }

   // fs.appendFile("./mydata.txt", 'Lorem ipsum dolor sit amet consectetur.', (err) => {
   //    if(err){
   //       console.log(err);
   //    }else{
   //       console.log("data successfully appended");
   //    }
   // })

   // fs.appendFileSync("mydata.txt", "ami ami ami");
   // console.log("Oh all fs moudle function learnt");
   // res.end();
});

// :listen the server :/
server.listen(port, () => console.log("server is running on " + port));
