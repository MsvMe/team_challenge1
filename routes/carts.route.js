const { Router } = require("express")
const {controllerCarts} = require("../controllers/carts.controller")

const router = Router()

router.post("/carts", controllerCarts.postCarts)
router.get("/carts", controllerCarts.getCarts)
router.delete("/carts/:id", controllerCarts.deleteCarts)
router.patch("/carts/:id", controllerCarts.patchCarts)
router.patch("/carts/products/:id", controllerCarts.patchCartsProduct)
router.patch("carts/product/:id", controllerCarts.patchCartsProductRemove)

module.exports = router