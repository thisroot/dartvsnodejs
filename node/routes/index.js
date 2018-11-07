let models = require("../models");
let utils = require("../utils");

module.exports.test1 = response => {
  response.end("Hello, world!");
};

const countHumans = 1000;

module.exports.test2 = response => {
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
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(humans));
};

module.exports.test3 = params => {
  return new Promise(resolve => {
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
  });
};

module.exports.defaultHandler = module.exports.defaultHandler = response => {
  response.end("DartVsNodejs");
};
