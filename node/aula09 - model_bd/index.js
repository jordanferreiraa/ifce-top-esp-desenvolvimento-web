const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const User = require('./routes/userRouter')

const conn = require('./db/conn')
const userModel = require('./model/User')

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

//configure template handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//parser para leitura do body
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//adicionando css
app.use(express.static('public'))

//adicionando rota users
app.use('/users', User)

app.get('/', (req, res) => {
  res.render('login')
})

conn.sync().then(() => {
  app.listen(port)
  console.log('Server Started')
})
.catch((err) => {
  console.log(err)
})

//webserver
// app.listen(port, () => {
//   console.log('Server Started')
// })