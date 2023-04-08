const User = require('../model/User')


module.exports = class UserController {

  static newUser(req, res) {
    res.render('/users/userForm')
  }

  static async newUserSave(req, res) {
    
    const usuario = {
      name: req.body.name,
      age: req.body.age
    }
    await User.create(usuario)
    res.redirect('/viewUser')
  }

}