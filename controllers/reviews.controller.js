const Review = require("../models/Review.model");


module.exports.reviewsController = {
    getAllReviews: async (req, res) => {
        try {
            const showAllReviews = await Review.find()
            res.json(showAllReviews)
        } catch (error) {
            res.json(error.message)
        }  
    },
    getReviewsById: async (req, res) => {
        try {
            const id = req.params.id
            const showReviewsById = await Review.findById(id)
            res.json(showReviewsById)
        } catch (error) {
            res.json(error.message)
        }
    },
    postReviews: async (req, res) => {
        try {
            await Review.create({
                text: req.body.text,
                user: req.body.user,
                product: req.body.product
            })
            res.json("Отзыв успешно создан")
        } catch (error) {
            res.json(error.message)
        }
    },
    patchReviews: async (req, res) => {
        try {
            await Review.findByIdAndUpdate(req.params.id,{
                text: req.body.text,
                user: req.body.user,
                product: req.body.product
            })
            res.json("отзыв успешно изменен")
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteReviews: async (req, res) => {
        try {
            await Review.findByIdAndRemove(req.params.id)
            res.json("отзыв успешно удален")
        } catch (error) {
            res.json(error.message)
        }
    },
    getAllReviewsByProduct: async (req, res) => {
        try {
            const showR = await Review.find({product: req.params.id})
            res.json(showR)
        } catch (error) {
            res.json(error.message)
        }
    }
}