const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 8080;
const killpath = "/kill";

exports.hostname = hostname;
exports.port = port;
exports.killpath = killpath;

if (require.main === module) {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    const parsedURL = url.parse(req.url, true);
    if (parsedURL.pathname == killpath) {
      res.end(process.pid.toString());
    } else {
      res.end(`Hello, world. My pid is ${process.pid}`);
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
}
