const { Router } = require('express')
const router = Router()

router.use(require('./Product.route'))
router.use(require('./usersRoute'))
router.use(require('./categoriesRoute'))
router.use(require('./brands.route'))
router.use(require('./reviews.route'))
router.use(require('./carts.route'))

module.exports = router