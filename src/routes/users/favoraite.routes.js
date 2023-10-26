const express = require('express');
const { addToFavoraite, deleteMyFav, allMyFav } = require('../../controller/users/favoraite.controller');
const { veryfyToken } = require('../../helper/userToken');

const FavoraiteRoutes =express.Router();

FavoraiteRoutes.post('/add-favoraite',veryfyToken,addToFavoraite);
FavoraiteRoutes.get('/allMy',veryfyToken,allMyFav);
FavoraiteRoutes.delete('/:id',veryfyToken,deleteMyFav);

module.exports= FavoraiteRoutes;
