const express = require('express')
const router = express.Router()

var auth = false

router.get('/home', (req, res) => {
  // auth = true
  res.render('home', { auth })
})

// router.post('/login', (req, res) => {
//   const login = req.body.login
//   const senha = req.body.senha
//   let message = ""

//   if(login == usuario.login && senha == usuario.senha) {
//     auth = true
//     message = "Usuário logado com sucesso!"
//     res.render('home', { usuario: usuario, auth, message })
//   }else {
//     auth = false
//     message = "Usuário e/ou senha inválidos!"
//     res.render('login', { auth, message })
//   }
// })

// router.get('/logout', (req, res) => {
//   auth = false
//   res.render('login', { auth })
// })

router.use(function(req, res){
  res.status(404).render('404')
})

module.exports = router