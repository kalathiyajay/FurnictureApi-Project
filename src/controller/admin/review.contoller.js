const ReviewServices = require('../../services/user/review.services.js');
const reviewServices = new ReviewServices();

exports.allReviewData = async (req,res)=>{
    try {
        let AllUserReview = await reviewServices.allUserReview({isDelete:false});
    
        if(!AllUserReview)
        {
            res.json({message:"Data Not Found"})
        }
        res.json({AllUserReview,message:"all data Found"});
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};