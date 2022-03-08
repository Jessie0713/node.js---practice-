//process of creating a server
// 1.you need http module
// 2.use http module to createServer
// 3.the function of reateServer will need a callback function
// 4.there are two parameters you can use in the function
// 5.if you want to get a response while browser request you need to setHeader
// 6. a listen function can help server listen to the request
const http = require('http') //use http module
const fs = require('fs')
const _ = require('lodash')
const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  const greet = _.once(() => console.log('hello'))
  greet()
  res.setHeader('Content-Type', 'text/html')
  let path = './views/'
  switch (req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break
    case '/about-u':
      res.statusCode = 301
      res.setHeader('Location', '/about')
      res.end()
      break
    default:
      path += '404.html'
      res.statusCode = 404
  }
  // switch 用法：what do you want to do(function) when（expression）matches case
  console.log(req.url)
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      // res.write(data)
      res.end(data) // if we want to response  only single file , we can write it in res.end() function
    }
  })
}) //req : 每次瀏覽器發出請求都跑一次
//localhost domain connecting back to our computer
//port : doors into our computer(internet can connect)
server.listen(3000, 'localhost', () => {
  console.log('listen for requests on port 3000')
}) // 監聽

//strange : about-me url
