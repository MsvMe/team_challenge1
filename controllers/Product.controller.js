const { Mongoose } = require("mongoose");
const Product = require("../models/Categorie.model");

module.exports.productConroller = {
  getProduct: async (req, res) => {
    try {
      const productFind = await Product.find();
      res.json(productFind);
    } catch (e) {
      res.json(e.message);
    }
  },
  postProduct: async (req, res) => {
    try {
      await Product.create({
        name: req.body.name,
        price: req.body.name,
        availability: req.body.name,
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
        req.params.id,
        { categorie: req.body.categorie },
        { brand: req.body.brand }
      );
      res.json("Сделано");
    } catch (e) {
      res.json(e.message);
    }
  },
  getProductCategorie: async (req, res) => {
    try {
      const ProdCat = Product.find({ categorie: req.params.id });
      res.json(ProdCat);
    } catch (e) {
      res.json(e.message);
    }
  },
  getProductBrand: async (req, res) => {
    try {
      const ProdBrand = Product.find({ brand: req.params.id });
      res.json(ProdBrand);
    } catch (e) {
      res.json(e.message);
    }
  },
};
