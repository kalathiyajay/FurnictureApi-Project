const ProductService = require('../../services/admin/product.service.js');
const productService = new ProductService();

exports.addProductData = async (req, res) => {
    let newProduct = await productService.getProduct({ title: req.body.title, isDelete: false })
    if (newProduct) {
        res.json({ message: "Product Is Alredy added" })
    }
    if (req.file) {
        req.body.image = `http://${process.env.IP}:${process.env.PORT}/${req.file.path}`
    }
    newProduct = await productService.addNewProduct({ ...req.body });
    res.json({ newProduct, message: "New Product Is Add" });
};

exports.getAllProduct = async (req, res) => {
    const AllPrductData = await productService.getAllProducts({ isDelete: false })
    res.json(AllPrductData);
};

exports.getSpecificProductData = async (req, res) => {
    const ID = req.params.id
    const getSpecific = await productService.getProductById(ID);
    if (!getSpecific) {
        return res.json({ message: "Product data Is Not Found" })
    }
    res.json(getSpecific);
};

exports.updateProductData = async (req, res) => {
    const ID = req.params.id
    const updateProduct = await productService.getProductById(ID);

    if (!updateProduct) {
        return res.json({ message: "Product data Is Not Found" })
    }
    updateProduct = await productService.updateProduct(ID, { ...req.body });
    res.json({ message: "Product Is Updated" })
};

exports.deleteProductData = async (req, res) => {
    const ID = req.params.id
    const removeProduct = await productService.getProductById(ID);

    if (!removeProduct) {
        return res.json({ message: "Product data Is Not Found" })
    }
    removeProduct = await productService.updateProduct(ID, { isDelete: true });
    res.json({ message: "Product Is Updated" })
};