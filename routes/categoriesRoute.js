const { Router } = require('express')
const { categoriesController } = require('../controllers/categoriesController')

const router = Router()

router.post('/admin/categories/', categoriesController.addCategorie)
router.delete('/admin/categories/:id', categoriesController.deleteCategorie)
router.patch('/admin/categories/:id', categoriesController.patchCategorie)
router.get('/categories', categoriesController.getCategorie)
router.get('/categories', categoriesController.getCategorieById)

module.exports = router
