const User = require('../model/User')

module.exports = class UserController {

  static newUser(req, res) {
    res.render('users/userForm')
  }

  static async newUserSave(req, res) {
    
    const usuario = {
      nome: req.body.name,
      idade: req.body.age
    }
    await User.create(usuario)
    // res.redirect('/viewUser')
    res.redirect('/users/allUsers')
  }

  static async home(req, res) {
    res.render('users/home')
  }

  static async allUsers(req, res) {
    const users = await User.findAll({ raw: true })
    res.render('users/viewUser', { users })
  }

  static async updateUser(req, res) {
    const id = req.params.id
    const user = await User.findOne({ where:{id:id}, raw:true })
    res.render('users/edit', { user })
  }

  static async updateUserSave(req, res) {
    const id = req.body.id
    const user = {
      nome: req.body.nome,
      idade: req.body.idade
    }
    await User.update(user, { where: {id: id} })
    .then(res.redirect('/users/allUsers'))
    .catch((err) => {
      console.log(err)
    })
  }

}