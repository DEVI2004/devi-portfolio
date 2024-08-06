

const router = require('express').Router();
const projectSchema = require('../models/projectModel');


//......project........................

//get project user
router.get('/project',async(req,res)=>{

    try {

        const project = await projectSchema.find(req.body);
        res.json(project);
        
    } catch (err) {
        res.status(500).json({msg:err})
        
    }
});

//add project user
router.post('/project', async (req,res)=>{
    const {title,product_id,description,images} = req.body;

    try {

        const project = new projectSchema({
            title,
            product_id,
            description,
            images
        })

        await project.save();
        res.json({msg:"Product added"})

        
    } catch (err) {
        //res.status(500).json({msg:err})
        if (err.code === 11000) {
            // Handle duplicate key error
            res.status(400).json({ msg: `Duplicate key error: ${err.keyValue.product_id} already exists` });
        } else {
            res.status(500).json({ msg: err.message });
        }
    }
});

//get specific project by id
router.get('/project/:id', async(req,res)=>{

    try {

        let project = await projectSchema.findById(req.params.id)
        res.json(project)

        
    } catch (error) {
        res.status(500).json({ msg: err.message })
    }
})

//update specific project by id
router.put('/project/update/:id',async (req,res)=>{

    const {title,product_id,description,images} = req.body;
    
    try {

        const project = await projectSchema.findByIdAndUpdate(req.params.id,{
        title,
        product_id,
        description,
        images

        })

        await project.save();
        res.json({msg:"Item updated"})
        
    } catch (err) {
        res.status(500).json({msg:err})   
    }
    
})

//delete specific project by id 
router.delete('/project/:id', async (req,res)=>{
    // let project = await projectSchema.findByIdAndDelete(req.params.id);

    // try {

    //     await project;
    //     res.json({msg:"Item deleted"})
        
    // } catch (error) {
    //     res.status(500).json({msg:err})
        
    // }

    try {
        let project = await projectSchema.findByIdAndDelete(req.params.id);
        res.json({ msg: "Item deleted" });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
})


module.exports = router;
