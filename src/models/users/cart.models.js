const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    product:{
        type:mongoose.Schema.Types.ObjectId
    },
    quantity:{
        type:Number
    },
    isDelete:{
        type:Boolean,
        default:false
    },
},   
{
    timeStamps:true,
    vesionKey:false
});

module.exports = mongoose.model('Cart',cartSchema);