let models = require("../models");
let utils = require("../utils");

module.exports.test1 = response => {
  response.end("Hello, world!");
};

const countHumans = 1000;

module.exports.test2 = (req, response) => {
  let humans = [];
  for (let index = 0; index < countHumans; index++) {
    humans.push(
      new models.Human(
        index,
        utils.getRandomLiterals(utils.firstnames),
        utils.getRandomLiterals(utils.lastNames),
        (Math.random() * 30) | 0
      ),
      !!Math.random()
    );
  }
  response.set("Content-Type", "application/json");
  response.send(humans);
};

module.exports.test3 = params => {
  return new Promise((resolve, reject) => {
    try {
      let humans = [];
      for (let index = 0; index < countHumans; index++) {
        humans.push(
          new models.Human(
            index,
            utils.getRandomLiterals(utils.firstnames),
            utils.getRandomLiterals(utils.lastNames),
            (Math.random() * 30) | 0
          ),
          !!Math.random()
        );
      }
      resolve(humans);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports.defaultHandler = module.exports.defaultHandler = (
  req,
  response
) => {
  response.end("DartVsNodejs");
};
