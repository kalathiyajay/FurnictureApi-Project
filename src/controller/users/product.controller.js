const ProductService = require('../../services/admin/product.service.js');
const productService = new ProductService();


exports.getAllProducts = async (req, res) => {
    try {
        let allProducts = await productService.getAllProducts({ isDelete: false });
        res.json(allProducts);
    } catch (error) {
        console.log(error);
        res.json({ message: error.message })
    }
}

exports.getSpecificProduct = async (req, res) => {
    try {
        let ID = req.params.id
        const SpecificData = await productService.getProductById(ID);
        res.json(SpecificData);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};