const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá mundo!!')
})

//webserver
app.listen(port, () => {
  console.log('Server Started')
})