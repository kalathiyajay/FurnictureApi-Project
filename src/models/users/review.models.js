const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId
    },
    product:{
        type:mongoose.Schema.Types.ObjectId
    },
    Review:{
        type:String
    },
    isDelete:{
        type:Boolean,
        default:false
    },
});

module.exports = mongoose.model('Review',reviewSchema);