const http = require("http");
const routes = require("./routes");
const port = 8080;

const requestHandler = async (request, response) => {
  let urlpath = request.url.split("/");
  if (urlpath.length > 1) {
    if (urlpath[1] == "1") {
      return routes.test1(response);
    } else if (urlpath[1] == "2") {
      return routes.test2(response);
    } else if (urlpath[1] == "3") {
      routes.test3().then(result => {
        response.setHeader("Content-Type", "application/json");
        return response.end(JSON.stringify(result));
      });
    } else {
      return routes.defaultHandler(response);
    }
  }
};

const server = http.createServer(requestHandler);
server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`Listening on localhost ${port}`);
});
