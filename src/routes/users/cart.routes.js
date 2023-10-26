const express = require('express');
const { addToCart, allMyCarts, specificMyCarts, updateMyCarts, deleteMyCarts } = require('../../controller/users/cart.controller.js');
const { veryfyToken } = require('../../helper/userToken.js');

const cartRoutes = express.Router();

cartRoutes.post('/add-cart',veryfyToken,addToCart);
cartRoutes.get('/all-cart',veryfyToken,allMyCarts);
cartRoutes.get('/:id',veryfyToken,specificMyCarts);
cartRoutes.put('/:id',veryfyToken,updateMyCarts);
cartRoutes.delete('/:id',veryfyToken,deleteMyCarts);

module.exports = cartRoutes;