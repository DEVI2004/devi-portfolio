const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({


    education:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('education',educationSchema);