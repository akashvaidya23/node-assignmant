const fs = require("fs");

const reqRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><body><form action="/store" method="POST"><input placeholder="Enter User Name" name="userName" type="text"><button type="submit">Submit</button></form></body></html>'
    );
    res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><body><ul><li>Akash</li><li>Salil</li><li>Rasika</li><li>Anand</li></ul></body></html>"
    );
    res.end();
  } else if (url === "/store" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("Hello There");
    res.end();
  }
};

module.exports = { req: reqRoutes };
