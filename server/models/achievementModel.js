// const mongoose = require('mongoose');

// const achievementSchema = new mongoose.Schema({


//     achievement:{
//         type:String,
//         required:true
//     }
// })


// module.exports = mongoose.model('achievement',achievementSchema);


const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({


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


module.exports = mongoose.model('achievements',achievementSchema);