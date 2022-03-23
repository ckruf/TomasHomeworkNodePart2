const http = require("http");

const hostname = require("./part2").hostname;
const port = require("./part2").port;
const killpath = require("./part2").killpath;

const options = {
  hostname: hostname,
  port: port,
  path: killpath,
  method: "GET",
};

const req = http.request(options, (response) => {
  response.on("data", (d) => {
    console.log(d);
    var intPID = parseInt(d);
    console.log(intPID);
    process.kill(intPID, "SIGTERM");
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
