const {Router} = require("express");

const router = Router();

const {reviewsController} = require("../controllers/reviews.controller");

router.get('/reviews', reviewsController.getAllReviews);
router.get('/reviews/:id', reviewsController.getReviewsById);
router.get('/reviews/product/:id', reviewsController.getAllReviewsByProduct);
router.post('/admin/reviews', reviewsController.postReviews);
router.patch('/admin/reviews/:id', reviewsController.patchReviews);
router.delete('/admin/reviews/:id', reviewsController.deleteReviews);


module.exports = router;