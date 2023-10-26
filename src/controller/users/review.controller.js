const ReviewServices = require('../../services/user/review.services.js');
const reviewServices = new ReviewServices();

exports.addReview = async (req, res)=> {
    try {
        let chack = await reviewServices.checkUser({product:req.body.product,isDelete:false});
    
        if(chack)
        {
            res.json({message:"review Already Add ..."})
        }
    
        chack = await reviewServices.newUserReview({...req.body})
    
        res.json({Review:chack,message:"review Add ..."})
        
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};

exports.allReview = async (req,res)=>{
    let ID = req.params.id
    let allData = await reviewServices.specificUserReview(ID);
    if(!allData)
    {
        res.json({message:"Review Not Found"})
    }
    res.json({allData,message:"review data Found..."});
}

exports.updateReview = async (req,res)=>{
    let ID = req.params.id
    let allData = await reviewServices.specificUserReview(ID);
    if(!allData)
    {
        res.json({message:"Review Not Found"})
    }

    allData = await reviewServices.updateUserReview(ID,{...req.body},{new:true});
    res.json({allData,message:"review data updated..."});
}

exports.deleteReview = async (req,res)=>{
    let ID = req.params.id
    let allData = await reviewServices.specificUserReview(ID);
    if(!allData)
    {
        res.json({message:"Review Not Found"})
    }

    allData = await reviewServices.updateUserReview(ID,{isDelete:true},{new:true});
    res.json({allData,message:"review data Deleted..."});
}