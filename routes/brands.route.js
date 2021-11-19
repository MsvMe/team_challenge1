const { Router } = require("express");
const { brandController } = require("../controllers/brands.controller");

const router = Router();

router.post("/admin/brands", brandController.addBrand);
router.delete("/admin/brands/:id", brandController.deleteBrandById);
router.patch("/admin/brands/:id", brandController.patchBrandById);
router.get("/admin/brands", brandController.getAllBrands);

module.exports = router;