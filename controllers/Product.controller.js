const Product = require("../models/Product.model");

module.exports.productConroller = {
  getProduct: async (req, res) => {
    try {
      const productFind = await Product.find().populate("brand categorie");
      res.json(productFind);
    } catch (e) {
      res.json(e.message);
    }
  },
  postProduct: async (req, res) => {
    try {
      await Product.create({
        name: req.body.name,
        price: req.body.price,
        availability: req.body.availability,
        categorie: req.body.categorie,
        brand: req.body.brand
      });
      res.json("Продукт добавлен");
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json("Продукт удален");
    } catch (e) {
      res.json(e.message);
    }
  },
  patchProduct: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(
        req.params.id, {
          categorie: req.body.categorie,
          brand: req.body.brand
        }
      );
      res.json("Сделано");
    } catch (e) {
      res.json(e.message);
    }
  },
  getProductCategorie: async (req, res) => {
    try {
      const ProdCat = await Product.find({ categorie: req.params.id }).populate("brand categorie");
      res.json(ProdCat);
    } catch (e) {
      res.json(e.message);
    }
  },
  getProductBrand: async (req, res) => {
    try {
      const ProdBrand = await Product.find({ brand: req.params.id }).populate("brand categorie");
      res.json(ProdBrand);
    } catch (e) {
      res.json(e.message);
    }
  },
};
