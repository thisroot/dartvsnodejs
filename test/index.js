const loadtest = require("loadtest");
var fs = require("fs");

let results = [];

function testCallback(name, accumulator) {
  return function statusCallback(error, result, latency) {
    console.log(
      "Current latency %j, result %j, error %j",
      latency,
      result,
      error
    );
    console.log("----");
    console.log("Request elapsed milliseconds: ", result.requestElapsed);
    console.log("Request index: ", result.requestIndex);
    console.log("Request loadtest() instance index: ", result.instanceIndex);
    accumulator.push(latency);
  };
}

function loadtestAsync(test) {
  return new Promise((resolve, reject) => {
    loadtest.loadTest(test, function(error, result) {
      if (error) {
        reject("Got an error: %s", error);
      }
      resolve(result);
    });
  });
}

async function runTests(tests) {
  console.log("Run batch tests");
  for (let test of tests) {
    console.log("run test", test.url);
    results.push(await loadtestAsync(test));
    console.log("Test run successfull", test.url);
  }
}

const tests = [
  // {
  //   //statusCallback: testCallback("dart-hw-r1000", results),
  //   url: "http://localhost:4040/1",
  //   maxSeconds: 10,
  //   concurency: 10,
  //   requestsPerSecond: 3000
  // },
  // {
  //   //statusCallback: testCallback("dart-hw-r1000", results),
  //   url: "http://localhost:8080/1",
  //   maxSeconds: 10,
  //   concurency: 10,
  //   requestsPerSecond: 3000
  // }
  {
    url: "http://localhost:4040/2",
    concurency: 500,
    maxSeconds: 60
  },
  {
    url: "http://localhost:4040/3",
    concurency: 500,
    maxSeconds: 60
  },
  {
    url: "http://localhost:8888/2",
    concurency: 500,
    maxSeconds: 60
  },
  {
    url: "http://localhost:8888/3",
    concurency: 500,
    maxSeconds: 60
  },
  {
    url: "http://localhost:8080/2",
    concurency: 500,
    maxSeconds: 60
  },
  {
    url: "http://localhost:8080/3",
    concurency: 500,
    maxSeconds: 60
  }
];

runTests(tests).then(() => {
  console.log(results);
  fs.writeFile(`./results`, JSON.stringify(results, null, 2), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});
