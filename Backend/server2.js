// backend/server2.js

const express = require('express')
const env = require('./env')

const app = express()

app.get('/', (req, res) => {
  res.send('Express.js server running!')
})

app.listen(env.PORT_EXPRESS, () => {
  console.log(`Express.js server listening on port ${env.PORT_EXPRESS}`)
})
