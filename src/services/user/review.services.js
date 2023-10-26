const Review =require('../../models/users/review.models.js');

module.exports = class ReviewServices{

    async checkUser(body){
        try {
            return await Review.findOne(body);
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async newUserReview(id,body){
        try {
            return await Review.create(id,body)
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async allUserReview(body){
        try {
            return await Review.find(body);
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async specificUserReview(id){
        try {
            return await Review.findById(id);
        } catch (error) {
            console.log(error);
            return error
        }
    };

    async updateUserReview(id,body){
        try {
            return await Review.findByIdAndUpdate(id,body,{new:true});
        } catch (error) {
            console.log(error);
            return error
        }
    };
}