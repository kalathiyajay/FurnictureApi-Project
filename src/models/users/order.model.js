const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            quantity:{
                type:Number,
            },
        },
    ],
    totalAmount:{
        type:Number
    },
    status:{
        type:String,
        default:"pending",
        enum:["pending","dispatch","Completed","rejected"]
    },
    isDelete:{
        type:Boolean,
        default:false,
    }
});

module.exports = mongoose.model("Orders",orderSchema);