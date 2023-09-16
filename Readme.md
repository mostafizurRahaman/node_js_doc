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

# Request Response Model In Node JS :

-  when a user request to node js server `server sends` response with `html` or
   `data`
-  Example Image: ![Node JS requst response modle]("./readme/reqres_model.jpg")
-  Response have two part `Status Code ` and `Data`
-  Data have two part `Head` and `Body`.
-  `Head` contains sensitive data like `content-type: "application/json"`,
   `content-length: 500` etc.
-  `Body` contains `response data`
-  Example image; ![Response Model](./readme/response.jpg);

# Request Object in node js :

| Properties | description                                      | example                |
| ---------- | ------------------------------------------------ | ---------------------- |
| `req.url`  | `req.url` gives us the `pathname` after baseURL. | `console.log(req.url)` |

# Response Object in node js :

| Properties        | description                                                                                                                                                         | example                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `res.writeHead()` | `res.writeHead()` function have two parameter `statusCode` & `content-type`. `content-type` value will be `text/html` or `application/json`                         | `res.writeHead(200, {"Content-Type:"application/json"})`                                         |
| `res.write()`     | `req.write()` helps to write response. `req.write()` return an `string`. If you want to send `object` or `array` . need to convert `string` with `JSON.stringify()` | `res.write("<p>Home Page.</p>");` <br/> `res.write(JSON.stringify({id: 1, name: 'javascript'}))` |
| `res.end()`       | `req.end()` end the response.` After every request, we need to end the response. Otherwise the serer will be stack.                                                 | `res.end()`                                                                                      |

# `url` module in node js :

-  require `url` from `url` :
   ```js
   const url = require("url");
   ```
-  `url` object conatains some `function` and properties:

   ```js

   // prototype of url object :
      {
         Url: [Function: Url],
         parse: [Function: urlParse],
         resolve: [Function: urlResolve],
         resolveObject: [Function: urlResolveObject],
         format: [Function: urlFormat],
         URL: [class URL] {
            canParse: [Function: canParse],
            createObjectURL: [Function: createObjectURL],
            revokeObjectURL: [Function: revokeObjectURL]
         },
         URLSearchParams: [class URLSearchParams],
         domainToASCII: [Function: domainToASCII],
         domainToUnicode: [Function: domainToUnicode],
         pathToFileURL: [Function: pathToFileURL],
         fileURLToPath: [Function: fileURLToPath],
         urlToHttpOptions: [Function: urlToHttpOptions]
      }
   ```

-  Url properties Details :
-  | Properties    | task                                                                                                                        | Example                               |
   | ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
   | `url.parse()` | - `url.parse()` has two parameter. - 1st parameter is `url string` -2nd parameter is `boolean` value for `parseQueryString` | ![URL Parse](./readme/url_module.jpg) |

### `url.parse(url:string, parseQueryString: boolean)` return an object like below:

```js
 {
         protocol: 'http:',
         slashes: true,
         auth: null,
         host: 'locahost:5000',
         port: '5000',
         hostname: 'locahost',
         hash: null,
         search: '?name=mostafiz&age=21&id=1',
         query: [Object: null prototype] { name: 'mostafiz', age: '21', id: '1' },
         pathname: '/users',
         path: '/users?name=mostafiz&age=21&id=1',
         href: 'http://locahost:5000/users?name=mostafiz&age=21&id=1'
      }
```
