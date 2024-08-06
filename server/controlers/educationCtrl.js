


const educationSchema = require('../models/educationModel');




//.........get education user.....
// exports.getEducation = async(req,res)=>{

//     const education = await educationSchema.find();
    
//     res.json(education);
    
//     try {
//         res.json(education);
//     } catch (error) {
//         res.status(500).json({msg:'server problem'})
        
//     }
    
// }    

exports.getEducation = async (req, res) => {
    try {
      const education = await educationSchema.find();
      res.json(education);
    } catch (error) {
      res.status(500).json({ msg: 'Server problem' });
    }
  };
  

//......add education user.........
// exports.addEducation = async (req, res) => {
//     try {
//       const education = await educationSchema.find();
//       res.json(education); // Send the response once data is retrieved
//     } catch (error) {
//       console.error(error); // Log the error for debugging
//       res.status(500).json({ msg: 'Server problem' }); // Send an error response
//     }

// }

exports.addEducation = async (req, res) => {
    try {
      const newEducation = new educationSchema(req.body); // Create a new instance from request body
      const savedEducation = await newEducation.save(); // Save the new education data
      res.json(savedEducation); // Send the newly created education data
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server problem' });
    }
  };
  

//........get specific education user by id..............
exports.getEducationId=async (req,res)=>{

    try {

        const education = await educationSchema.findById(req.params.id);
        if (!education) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(education);
        
    } catch (error) {
        res.status(500).json({ msg: 'Server problem' });
    }

}

//........update specific user by id ..................
exports.updateEducation=async(req,res)=>{
    const {education} = req.body;
 
 
    try {
 
     const newEducation = await educationSchema.findByIdAndUpdate(req.params.id, {
 
        education
     
        });
     
        let results = await newEducation.save();
        await results;
        res.json({msg:'Item updated'})
     
    } catch (error) {
 
     res.status(500).json({ msg: 'Server problem' });
    }
    
 }


 //..........delete................
// exports.delEducation=async(req,res)=>{
//     const education = await educationSchema.findByIdAndDelete(req.params.id)

//     education;

//     res.json({msg:'Item deleted'})
   
// }

exports.delEducation = async (req, res) => {
  try {
    const education = await educationSchema.findByIdAndDelete(req.params.id);

    if (!education) {
      return res.status(404).json({ msg: 'Item not found' });
    }

    res.json({ msg: 'Item deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server problem' });
  }
};