const Brand = require("../models/brand.model");
module.exports.brandController = {
  addBrand: async (req, res) => {
    try {
      const brands = await Brand.create({
        name: req.body.name,
      });
      res.json("Бренд добавлен");
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteBrandById: async (req, res) => {
    try {
      const deleteBrand = await Brand.findByIdAndDelete(req.params.id);
      res.json("Бренд удален");
    } catch (e) {
      res.json(e.message);
    }
  },
  patchBrandById: async (req, res) => {
    try {
      const patchBrand = await Brand.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
      );
      res.json("Данные бренда изменены");
    } catch (e) {
      res.json(e.message);
    }
  },
  getAllBrands: async (req, res) => {
    try {
      const allBrands = await Brand.find();
      res.json(allBrands);
    } catch (e) {
      res.json(e.message);
    }
  },
};
