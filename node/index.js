const http = require('http')
const routes = require('./routes')
const port = 8080

const requestHandler = async (request, response) => {
  let urlpath = request.url.split('/')
  if (urlpath.length > 1) {
    switch (urlpath[1]) {
      case '1':
        routes.test1(response)
        break
      case '2':
        routes.test2(response)
      case '3':
        let result = await routes.test3()
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(result))
        break
      default:
        routes.defaultHandler(response)
        break
    }
  }
  routes.defaultHandler(response)
}

const server = http.createServer(requestHandler)
server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`Listening on localhost ${port}`)
})
