# Dart vs Node.js

### test for http servers dart, aqueduct (dart framework), node.js

### results

- 1 GET, create 1000 humans and response to client (synchronous handlers)
  - concurency: 500,
  - maxSeconds: 60

| name          | dart  | dart (fm) | node  |
| ------------- | ----- | --------- | ----- |
| totalRequests | 14056 | 14514     | 20510 |
| rps           | 234   | 242       | 342   |
| meanLatencyMs | 4.2   | 4.1       | 2.9   |
| maxLatencyMs  | 114   | 103       | 16    |
| meanLatencyMs | 3     | 3         | 2     |

- 2 GET, create 1000 humans and response to client (asynchronous handlers)
  - concurency: 500,
  - maxSeconds: 60

| name          | dart  | dart (fm) | node  |
| ------------- | ----- | --------- | ----- |
| totalRequests | 10922 | 15069     | 21400 |
| rps           | 182   | 251       | 357   |
| meanLatencyMs | 5.5   | 4         | 2.8   |
| maxLatencyMs  | 18    | 16        | 14    |
| meanLatencyMs | 4     | 3         | 2     |
