const express = require('express');
const { addReview, allReview, updateReview, deleteReview } = require('../../controller/users/review.controller.js');
const reviewRoutes = express.Router();

reviewRoutes.post('/add-review',addReview);
reviewRoutes.get('/:id',allReview);
reviewRoutes.put('/:id',updateReview);
reviewRoutes.delete('/:id',deleteReview);


module.exports =reviewRoutes;



