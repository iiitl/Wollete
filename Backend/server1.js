// backend/server1.js

const http = require('http')
require('dotenv').config() // Load environment variables from .env file

const PORT_NODE = process.env.PORT_NODE || 5000 // Use port from .env file or default to 5000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Node.js server running!')
})

server.listen(PORT_NODE, () => {
  console.log(`Node.js server listening on port ${PORT_NODE}`)
})
