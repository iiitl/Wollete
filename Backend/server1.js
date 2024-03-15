// backend/server1.js

const http = require('http')
const env = require('./env')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Node.js server running!')
})

server.listen(env.PORT_NODE, () => {
  console.log(`Node.js server listening on port ${env.PORT_NODE}`)
})
