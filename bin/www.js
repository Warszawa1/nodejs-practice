//arrancar la app

const app = require("../app");
const http = require("http");

const port = 3000;

//crear servidor

const server = http.createServer(app);
server.listen(port);



