// backend/server2.js

const express = require('express')
require('dotenv').config() // Load environment variables from .env file

const PORT_EXPRESS = process.env.PORT_EXPRESS || 5001 // Use port from .env file or default to 5001

const app = express()

app.get('/', (req, res) => {
  res.send('Express.js server running!')
})

app.listen(PORT_EXPRESS, () => {
  console.log(`Express.js server listening on port ${PORT_EXPRESS}`)
})
