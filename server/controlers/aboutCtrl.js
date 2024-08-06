
const aboutSchema = require('../models/aboutModel');

const express = require('express');
const router = express.Router();

//.........get about user.....
exports.getAbout = async(req,res)=>{

    // const about = await aboutSchema.find();
    
    // res.json(about);
    
    try {
        const about = await aboutSchema.find();
        res.json(about);
    } catch (error) {
        res.status(500).json({msg:'server problem'})
        
    }
    
}    

//......add about user.........
// exports.addAbout = async (req, res) => {
//     try {
//       const about = await aboutSchema.find();
//       res.json(about); // Send the response once data is retrieved
//     } catch (error) {
//       console.error(error); // Log the error for debugging
//       res.status(500).json({ msg: 'Server problem' }); // Send an error response
//     }

// }

exports.addAbout = async (req, res) => {
    try {
      const newAbout = new aboutSchema(req.body); // Create a new instance from request body
      const savedAbout = await newAbout.save(); // Save the new About data
      res.json(savedAbout); // Send the newly created About data
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server problem' });
    }
  };

//........get specific about user by id..............
exports.getAboutId=async (req,res)=>{

    try {

        const about = await aboutSchema.findById(req.params.id);
        if (!about) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(about);
        
    } catch (error) {
        res.status(500).json({ msg: 'Server problem' });
    }

}

//........update specific user by id ..................
exports.updateAbout=async(req,res)=>{
    const {about} = req.body;
    try {
     const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {about}, { new: true });
     
        let results = await newAbout.save();
        await results;
        res.json({msg:'Item updated', updatedAbout})
     
    } catch (error) {
 
     res.status(500).json({ msg: 'Server problem' });
    }
    
 }


 //..........delete................
// exports.delAbout=async(req,res)=>{
//     const about = await aboutSchema.findByIdAndDelete(req.params.id)

//     about;

//     res.json({msg:'Item deleted'})
   
// }

exports.delAbout = async (req, res) => {
  try {
    const about = await aboutSchema.findByIdAndDelete(req.params.id);

    if (!about) {
      return res.status(404).json({ msg: 'Item not found' });
    }

    res.json({ msg: 'Item deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server problem' });
  }
};
