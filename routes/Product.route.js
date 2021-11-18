const {Router} = require ('express')
const { productConroller } = require('../controllers/Product.controller')
const router = Router()

router.get('/product/brand/:id', productConroller.getProductBrand)
router.get('/product/:categorie/:id', productConroller.getProductCategorie)
router.get('/product',productConroller.getProduct )
router.post('/admin/product', productConroller.postProduct)
router.delete('/admin/product/:id', productConroller.deleteProduct)
router.patch('/admin/product/:id', productConroller.patchProduct)


module.exports = router