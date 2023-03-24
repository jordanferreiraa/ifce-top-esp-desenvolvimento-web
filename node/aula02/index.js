const express = require('express')
const app = express()
const port = 3000

const path = require('path')

//anexa a pasta templates
const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

//webserver
app.listen(port, () => {
  console.log('Server Started')
})