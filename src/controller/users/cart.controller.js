const CartServices = require('../../services/user/cart.services.js');
const cartServices = new CartServices();
exports.addToCart = async (req, res) => {

    try {
        let newCart = await cartServices.cartFindOne({ product: req.body.product, isDelete: false });

        if (newCart) {
            return res.json({ message: "Cart Product Is Already Exist.." })
        }

        newCart = await cartServices.createCart({ ...req.body });

        res.json({ newCart, message: "Cart Is Added.." })
    } catch (error) {
        console.log(error); 
        res.json(error.message);
    }
};

exports.allMyCarts = async (req, res) => {
    try {
        let myCart = await cartServices.cartFind();

        if (!myCart) {
            res.json({ message: "Cart Data Is Not Found" })
        }
        res.json({ myCart, message: "All Cart Found" });
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
}

exports.specificMyCarts = async (req, res) => {
    try {
        let ID = req.params.id
        let singleCart = await cartServices.specificCartFindById(ID);

        if (!singleCart) {
            res.json({ message: "Cart Data Is Not Found" })
        }
        res.json({ singleCart, message: "Single Cart Data Found" });
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
}

exports.updateMyCarts = async (req, res) => {
    try {
        let ID = req.params.id
        let updateCart = await cartServices.specificCartFindById(ID);

        if (!updateCart) {
            res.json({ message: "Cart Data Is Not Found" })
        }
        updateCart = await cartServices.CartUpdate(ID, { ...req.body });
        res.json({ updateCart, message: "Cart Data Is Updated..." });

    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
}

exports.deleteMyCarts = async (req, res) => {
    try {
        let ID = req.params.id
        let deleteCart = await cartServices.specificCartFindById(ID);

        if (!deleteCart) {
            res.json({ message: "Cart Data Is Not Found" })
        }
        deleteCart = await cartServices.CartUpdate(ID, { isDelete: true });
        res.json({ message: "Cart Data Is Deleted...." });

    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
} 