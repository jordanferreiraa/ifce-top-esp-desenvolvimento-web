const express = require('express')
const app = express()
const port = 3000

const path = require('path')

//anexa a pasta templates
const basePath = path.join(__dirname, 'templates')

//parser para leitura do body
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  console.log(`O nome do usuário é ${name} e a idade é ${age}`)
})


app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

//webserver
app.listen(port, () => {
  console.log('Server Started')
})