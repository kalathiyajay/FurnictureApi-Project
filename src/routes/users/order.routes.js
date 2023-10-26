const express = require('express');
const { veryfyToken } = require('../../helper/userToken.js');
const { addOrder, getMyAllOrders, specificOrder, updateOrder, deleteOrder } = require('../../controller/users/order.controller');

const orderRoutes = express.Router();

orderRoutes.post('/add-order',veryfyToken,addOrder);
orderRoutes.get('/all-order',veryfyToken,getMyAllOrders);
orderRoutes.get('/:id',veryfyToken,specificOrder);
orderRoutes.put('/:id',veryfyToken,updateOrder);
orderRoutes.delete('/:id',veryfyToken,deleteOrder);



module.exports= orderRoutes;


