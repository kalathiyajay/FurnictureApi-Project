const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    mobileNo:{
        type:String
    },
    isDelete:{
        type:Boolean,
        default:false
    }
});

module.exports =mongoose.model('User',userSchema);