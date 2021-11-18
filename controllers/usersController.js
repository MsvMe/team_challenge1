const User = require('../models/User.model')

module.exports.usersController = {
  addUser: async (req, res) => {
    try {
      await User.create({
        name: req.body.name
      })
      res.send('Пользователь добавлен')
    } catch (e) {
      res.send(e)
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.send('Пользователь удален')
    } catch (e) {
      res.send(e)
    }
  },
  getUser: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (e) {
      res.send(e)
    }
  },
  getUserById: async (req, res) => {
    try {
      const userId = await User.findById(req.params.id)
      res.json(userId)
    } catch (e) {
      res.send(e)
    }
  },
  patchUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name
      })
    } catch (e) {
      res.send(e)
    }
  }
}