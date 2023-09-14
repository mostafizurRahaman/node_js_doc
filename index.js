// const http = require("http");
// const _ = require("underscore");
// const server = http.createServer((req, res) => {
//    res.writeHead(200, { "content-type": "application/json" });
//    const userList = [
//       {
//          id: 1,
//          name: "mostafizur rahaman",
//          email: "mostafizur@gmail.com",
//       },
//       {
//          id: 2,
//          name: "mostafizur rahaman",
//          email: "mostafizur@gmail.com",
//       },
//       {
//          id: 3,
//          name: "mostafizur rahaman",
//          email: "mostafizur@gmail.com",
//       },
//       {
//          id: 4,
//          name: "mostafizur rahaman",
//          email: "mostafizur@gmail.com",
//       },
//    ];

//    const newUserList = _.map(userList, function (i) {
//       return { id: i.id, name: i.name };
//    });
//    res.write(JSON.stringify(newUserList));

//    res.end();
// });

// server.listen(5000, () => console.log("server is running on 5000"));

const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
   res.end("server is running ");
});

server.listen(port, () => {
   console.log("server is running now port : 5000");
});
