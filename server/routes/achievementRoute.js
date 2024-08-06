

// const router = require('express').Router();
// const {getAchievement, addAchievement, getAchievementId, updateAchievement , delAchievement} = require('../controlers/achievementCtrl');


// //......achievement........................

// //get achievement user
// router.get('/achievement',getAchievement)

// //add achievement user
// router.post('/achievement', addAchievement);

// //get specific achievement by id
// router.get('/achievement/:id',getAchievementId)

// //update specific achievement by id
// router.put('/achievement/update/:id',updateAchievement)

// //delete specific achievement by id 
// router.delete('/achievement/:id',delAchievement)


// module.exports = router;





const router = require('express').Router();
const achievementSchema = require('../models/achievementModel');


//......achievement........................

//get achievement user
router.get('/achievement',async(req,res)=>{

    try {

        const achievement = await achievementSchema.find(req.body);
        res.json(achievement);
        
    } catch (err) {
        res.status(500).json({msg:err})
        
    }
});

//add achievement user
router.post('/achievement', async (req,res)=>{
    const {title,product_id,description,images} = req.body;

    try {

        const achievement = new achievementSchema({
            title,
            product_id,
            description,
            images
        })

        await achievement.save();
        res.json({msg:"Product added"})

        
    } catch (err) {
        if (err.code === 11000) {
            // Handle duplicate key error
            res.status(400).json({ msg: `Duplicate key error: ${err.keyValue.product_id} already exists` });
        } else {
            res.status(500).json({ msg: err.message });
        }
    }
});


//get specific achievement by id
router.get('/achievement/:id', async(req,res)=>{

    try {

        let achievement = await achievementSchema.findById(req.params.id)
        res.json(achievement)

        
    } catch (error) {
        res.status(500).json({msg:err.message})
    }
})

//update specific achievement by id
router.put('/achievement/update/:id',async (req,res)=>{

    const {title,product_id,description,images} = req.body;
    
    try {

        const achievement = await achievementSchema.findByIdAndUpdate(req.params.id,{
        
        title,
        product_id,
        description,
        images

        })

        await achievement.save();
        res.json({msg:"Item updated"})
        
    } catch (err) {
        res.status(500).json({msg:err})   
    }
    
})

//delete specific achievement by id 
router.delete('/achievement/:id', async (req,res)=>{
    let achievement = await achievementSchema.findByIdAndDelete(req.params.id);

    // try {

    //     await achievement;
    //     res.json({msg:"Item deleted"})
        
    // } catch (error) {
    //     res.status(500).json({msg:err})
        
    // }

    try {
        let achievement = await achievementSchema.findByIdAndDelete(req.params.id);
        res.json({ msg: "Item deleted" });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
})


module.exports = router;
