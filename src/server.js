require("dotenv").config();
const express = require('express');
const server = express();
const port = process.env.PORT||5000;
const mongoose = require('mongoose');
const multer = require('multer');

// All Routes ---

const productRoutes = require("./routes/admin/productRoutes.js");
const UserProductRoutes = require("./routes/users/product.routes.js");
const userRoutes = require("./routes/users/user.routes.js");
const cartRoutes = require("./routes/users/cart.routes.js");
const reviewRoutes = require("./routes/users/review.routes.js");
const adminReviewRoutes = require("./routes/admin/review.routes.js");
const orderRoutes = require("./routes/users/order.routes.js");
const FavoraiteRoutes = require("./routes/users/favoraite.routes.js");

// MongoDB Connection ---
mongoose
    .connect(process.env.MONGODB_ATLAS_PATH)
    .then(() => console.log("DB Is Connected"))
    .catch((err) => console.log(err))
    
server.use(express.json());

// Multer ---

server.use('/images',express.static("./images"));

// Product ---
server.use('/admin/product',productRoutes);
server.use('/user/product',UserProductRoutes)

// User  ---
server.use('/user',userRoutes);

// Cart ---
server.use('/cart',cartRoutes);

// Review ---
server.use('/admin/review',adminReviewRoutes);
server.use('/user/review',reviewRoutes);

// Order ---

server.use('/order',orderRoutes);

// Favouraite --

server.use('/favoraite',FavoraiteRoutes);

server.listen(port, () => {
    console.log(`Server Is Connected At ${port}`);
})