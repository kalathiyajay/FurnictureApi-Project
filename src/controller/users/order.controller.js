const Cart = require('../../models/users/cart.models.js');
const Order = require("../../models/users/order.model.js");


exports.addOrder = async (req, res) => {
    try {
        let cartItems = await Cart.find({ user: req.user._id }).populate("products");
        let orderItems = cartItems.map((item) => ({
            product: item.products._id,
            quantity: item.quantity,
            price: item.products.price,
        }));

        totalAmount = orderItems.reduce(
            (total, item) => total + item.quantity * item.price, 0);

        let newOrder = await Order.create({
            user: req.user._id,
            item: orderItems,
            totalAmount,
        });

        await Cart.updateMany({ user: req.user._id }, { isDelete: true });
        res.status(200).json({ order: newOrder, massage: "Order Is Cretaed" });
    } catch (error) {
        res.json(error);
    }
};

exports.getMyAllOrders = async (req, res) => {
    try {
        let orders = await Order.find({ user: req.user._id, isDelete: false });
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

exports.specificOrder = async (req, res) => {
    let ID = req.params.id
    let specificData = await Order.findById(ID);
    res.json(specificData);
}

exports.updateOrder = async (req, res) => {
    let ID = req.params.id
    let updateData = await Order.findByIdAndUpdate(ID, req.body, { new: true });
    res.json(updateData);

}

exports.deleteOrder = async (req, res) => {
    let ID = req.params.id
    let deleteData = await Order.findById(ID);

    deleteData = await Order.findByIdAndUpdate(ID,
        { isDelete: true },
        { new: true });
    res.json(deleteData);
}