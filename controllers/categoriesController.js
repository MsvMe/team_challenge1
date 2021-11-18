const Categorie = require('../models/Categorie.model')

module.exports.categoriesController = {
  addCategorie: async (req, res) => {
    try {
      await Categorie.create({
        name: req.body.name
      })
      res.send("Категория добавлена")
    } catch (e) {
      res.send(e)
    }
  },
  deleteCategorie: async (req, res) => {
    try {
      await Categorie.findByIdAndDelete(req.params.id)
      res.send('Категория удалена')
    } catch (e) {
      res.send(e)
    }
  },
  patchCategorie: async (req, res) => {
    try {
      await Categorie.findByIdAndUpdate(req.params.id, {
        name: req.body.name
      })
      res.send('Категория обновлена')
    } catch (e) {
      res.send(e)
    }
  },
  getCategorie: async (req, res) => {
    try {
      const categories = await Categorie.find()
      res.json(categories)
    } catch (e) {
      res.send(e)
    }
  },
  getCategorieById: async (req, res) => {
    try {
      const categorieById = await Categorie.findById(req.params.id)
      res.json(categorieById)
    } catch (e) {
      res.send(e)
    }
  }
}