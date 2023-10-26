const Favoraite = require('../../models/users/favoraite.model.js');

module.exports = class FavoraiteService{

    async FavoraiteFind(body){
        try {
            return await Favoraite.findOne(body)
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    async FavoraiteCreate(body){
        try {
            return await Favoraite.create(body)
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async FavoraiteAll(body){
        try {
            return await Favoraite.find(body);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async FavoraiteRemove(id){
        try {
            return await Favoraite.findByIdAndUpdate(id,{new:true});
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}