const express = require('express');
const upload = require("../../helper/uplodeImages.js");
const { addProductData,
    getAllProduct,
    getSpecificProductData,
    updateProductData,
    deleteProductData
} = require('../../controller/admin/productcontroller');

const productRoutes = express.Router();


productRoutes.post('/add-product',upload.single('images'),addProductData);
productRoutes.get('/all-products', getAllProduct);
productRoutes.get('/:id', getSpecificProductData);
productRoutes.put('/:id', updateProductData);
productRoutes.delete('/:id', deleteProductData);

module.exports = productRoutes;