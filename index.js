// const compayName = "Universe It Institute";
// const location = "Aftab Nagar, Merun Badda, Chittagong";
// const polytechnic = "cumilla polytechnic institute";

// module.exports = { compayName, location, polytechnic };

const http = require("http");

const server = http.createServer((req, res) => {
   console.log("server is running now");
});

server.listen(5000, () => {
   console.log("server is running");
});
