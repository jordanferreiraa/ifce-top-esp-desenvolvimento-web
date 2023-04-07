const express = require('express')
const router = express.Router()

var auth = false
var users = [
  {name: 'Maria', age: 30},
  {name: 'Paulo', age: 40}
]

const usuario = {
  login: 'teste',
  senha: 123
}

router.get('/home', (req, res) => {
  // auth = true
  res.render('home', { auth })
})

router.get('/add', (req, res) => {
  auth = true
  res.render('userForm', { auth })
})

router.post('/save', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const user = { name: name, age: age }
  users.push(user)
  auth = true
  res.render('viewUser', { users, auth })
})

router.post('/login', (req, res) => {
  const login = req.body.login
  const senha = req.body.senha
  let message = ""

  if(login == usuario.login && senha == usuario.senha) {
    auth = true
    message = "Usuário logado com sucesso!"
    res.render('home', { usuario: usuario, auth, message })
  }else {
    auth = false
    message = "Usuário e/ou senha inválidos!"
    res.render('login', { auth, message })
  }
})

router.get('/logout', (req, res) => {
  auth = false
  res.render('login', { auth })
})

router.use(function(req, res){
  res.status(404).render('404')
})

module.exports = router