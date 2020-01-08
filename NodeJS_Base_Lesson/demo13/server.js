var http = require('http')
var url = require('url')

const port = 4499
function start (route){
  var httpCallback = function (request, response) {
    //url取到的path没有请求参数，只是路径。取参数要用querystring
    var path = url.parse(request.url).pathname
    route && route(path)
    
    console.log('httpCallback: request for ', path)
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('hello cainiao...')
    response.end()
  }
  http.createServer(httpCallback).listen(port)
  console.log('server stared, listen to port: ', port)
}
exports.start = start
