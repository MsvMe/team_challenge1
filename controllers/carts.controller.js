const Carts = require("../models/Cart.model");

module.exports.controllerCarts = {
  postCarts: async (req, res) => {
    try {
      await Carts.create({

      });
      res.json("Cart has been added");
    } catch (ERROR) {
      res.json(ERROR);
    }
  },
  getCarts: async (req, res) => {
    try{
      const carts = await Carts.find()
      res.json(carts)
    } catch (ERROR) {
      res.json(ERROR)
    }
  },
  deleteCarts: async (req, res) => {
    try{
      const carts = await Carts.findByIdAndRemove(req.params.id)
      res.json(carts)
    } catch (ERROR) {
      res.json(ERROR)
    }
  },
  patchCarts: async (req, res) => {
    try {
      const carts = await Carts.findByIdAndUpdate(req.params.id,
        {name: req.body.name,
         user: req.body.user,
          product: req.body.product
        })
      res.json(carts)
    } catch (ERROR) {
      res.json(ERROR)
    }
  },
  patchCartsProduct: async (req, res) => {
    try{
      const carts = await Carts.findByIdAndUpdate(req.params.id,{$addToSet: {product: req.body.product, new: true}})
      res.json(carts)
    } catch (ERROR) {
      res.json(ERROR)
    }
  },
   patchCartsProductRemove: async (req, res) => {
    try{
      const carts = await Carts.findByIdAndUpdate(req.params.id, {$pull: {product: req.body.product, new: true}})
      res.json(carts)
    } catch (ERROR) {
      res.json(ERROR)
    }
   }
};