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

// const { add , sub} = require("./other");
// const a = add(10, 20);
// const b = sub(20, 10);
// console.log(a, b)
