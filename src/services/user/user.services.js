const User = require('../../models/users/user.models.js');
const bcrypt = require('bcrypt')

module.exports = class UserServices {

    async checkUser(body){
        try {
            return await User.findOne(body)
        } catch (error) {
            console.log(error);
            return error
        }
    };
    async checkUserPassword(body){
        try {
            return await User.findOne(body)
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async newUser(body){
        try {
            return await User.create(body)
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async userfindById(id){
        try {
            return await User.findById(id)
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async changePassword(id,body){
        try {
            return await User.findByIdAndUpdate(id,body,{new:true})
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async passwordCompare(body){
        try {
            return await bcrypt.compare(body)
        } catch (error) {
            console.log(error);
            return error
        }
    };

}