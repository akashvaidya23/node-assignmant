const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes.req);

server.listen(3000);
