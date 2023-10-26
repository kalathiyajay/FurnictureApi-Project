const Cart = require('../../models/users/cart.models.js');

module.exports = class CartServices{

    async cartFindOne(body){
        try {
            return await Cart.findOne(body);
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async createCart(id,body){
        try {
            return await Cart.create(id,body);
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async cartFind(id){
        try {
            return await Cart.find(id);
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async specificCartFindById(id){
        try {
            return await Cart.findById(id);
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async CartUpdate(id,body){
        try {
            return await Cart.findByIdAndUpdate(id,body,{new:true});
        } catch (error) {
            console.log(error);
            return error
        }
    };
}