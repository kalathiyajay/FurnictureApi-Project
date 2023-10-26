const express =require('express');
const { getAllProducts, getSpecificProduct } = require('../../controller/users/product.controller.js');

const UserProductRoutes = express.Router();

UserProductRoutes.get('/all-product',getAllProducts)
UserProductRoutes.get('/:id',getSpecificProduct);

module.exports =UserProductRoutes;