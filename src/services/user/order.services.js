const Order = require('../../models/users/order.model.js');
const Cart = require('../../models/users/cart.models.js');

module.exports = class OrderServies{

    async OrderFindOne(id){
        try {
            return await Cart.findById(id);
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async OrderCreate(body){
        try {
            return await Order.create();
        } catch (error) {
            console.log(error);
            return error
        }
    };
}