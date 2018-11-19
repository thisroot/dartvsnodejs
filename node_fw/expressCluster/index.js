const routes = require("./routes");

module.exports = function(cluster) {
  var express = require("express");
  var app = express();
  app.get("/2", routes.test2);
  app.get("/3", (req, res) => {
    routes
      .test3()
      .then(result => {
        res.setHeader("Content-Type", "application/json");
        res.send(result);
      })
      .catch(e => {
        console.log(e);
        res.end(500);
      });
  });

  app.listen(8181, function() {
    console.log(
      "Application started! Worker %d started!, process %d",
      cluster.worker.id,
      cluster.worker.process.pid
    );
  });
};
