const express =require('express');
const { allReviewData } = require('../../controller/admin/review.contoller');

const adminReviewRoutes = express.Router();

adminReviewRoutes.get('/all-review',allReviewData);

module.exports =adminReviewRoutes;