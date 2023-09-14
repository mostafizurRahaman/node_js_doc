# Node Js Modules

-  Node Js have 3 Types of modules like `core modules`, `local modules`,
   `third party modules`
-  `Core Modules`: Node Js have some own modules like :
-  | Module      | work                                                                                     |
   | ----------- | ---------------------------------------------------------------------------------------- |
   | http        | http modules includes `classes`, `methods` and `events` to create node js `http` server. |
   | url         | url modules includes `methods` for url `resulation` and `parsing`                        |
   | querystring | query string modules includes methods to deal query string                               |
   | path        | path modules includes method to deal `file path`                                         |
   | fs          | includes method classes and events to work with file I/O                                 |
   | util        | util module includes utility functions useful for programmers.                           |
-  `Local Module`: The module which we create and export or import.
-  `Third Party Module`: Third party modules are third party packages that we
   install to complete any specific task.

# Create a Simple http server :

-  require `http` from 'http'
-  http contains an function `createServer`.
-  `createServer` server receive a function as `parameter`.
-  Create server has two parameter like `(req, res)`
-  Then listen the server on a port.
-  Example:
-  ```js
   const http = require("http");
   const port = 5000;
   const http = require("http");
   const port = 5000;

   const server = http.createServer((req, res) => {
      res.end("server is running ");
   });

   server.listen(port, () => {
      console.log("server is running now port : 5000");
   });
   ```