const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({


    product_id:{
        type:String,
        unique:true,
        required:true
    },

    title:{
        type:String,
        trim:true
    },

    description:{
        type:String,
        required:true
    },

    images:{
        type:Object,
        required:true
    },

})


module.exports = mongoose.model('projects',projectSchema);