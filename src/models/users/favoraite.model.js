const mongoose = require('mongoose')

const favoraiteSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    product:{
        type:mongoose.Schema.Types.ObjectId
    },
    isDelete:{
        type:Boolean,
        default:false
    },
});

module.exports = mongoose.model('Favoraite',favoraiteSchema);