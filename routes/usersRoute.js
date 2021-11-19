const { Router } = require('express')
const { usersController } = require('../controllers/usersController')

const router = Router()

router.post('/admin/users', usersController.addUser)
router.delete('/admin/users/:id', usersController.deleteUser)
router.patch('/admin/users/:id', usersController.patchUser)
router.get('/users', usersController.getUser)
router.get('/users/:id', usersController.getUserById)

module.exports = router