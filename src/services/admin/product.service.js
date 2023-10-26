const Product = require('../../models/admin/productModels.js');

module.exports = class ProductService {
    // Add New Product
    async addNewProduct(body) {
        try {
            return await Product.create(body);
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    // Get All Products
    async getAllProducts(body) {
        try {
            return await Product.find(body);
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    // Get Single Products
    async getProduct(body) {
        try {
            return await Product.findOne(body);
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    // Get Single Product by ID
    async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            console.log(error);
            return error;
        }
    };


    // update Single Products
    async updateProduct(id, body) {
        try {
            return await Product.findByIdAndUpdate(id, body, { new: true });
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};