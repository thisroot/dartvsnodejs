const http = require("http");
const port = 8080;

const requestHandler = (request, response) => {
  response.end("Hello, world!");
};
const server = http.createServer(requestHandler);
server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`Listening on localhost ${port}`);
});
