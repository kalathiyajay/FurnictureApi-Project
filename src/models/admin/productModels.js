const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title:{
        type:String
    },
    discription:{
        type:String
    },
    price:{
        type:Number
    },
    image:[{
        type:String
    }],
    category:[{
        type:String
    }],
    rating:{
        type:Number,
        min:[0],
        max:[5],
    },
    isDelete:{
        type:Boolean,
        default:false
    }
});

module.exports =mongoose.model('Product',productSchema);