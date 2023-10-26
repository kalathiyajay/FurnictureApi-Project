const express = require('express');
const userRoutes = express.Router();
const { SignUp, Login, userProfile, changePassword } = require('../../controller/users/user.controller.js');
const { veryfyToken } = require('../../helper/userToken.js');


userRoutes.post('/add-user',SignUp);
userRoutes.post('/login',Login);
userRoutes.get('/me',veryfyToken,userProfile);
userRoutes.put('/change-password',veryfyToken,changePassword);

module.exports = userRoutes;