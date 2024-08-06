


const skillSchema = require('../models/skillModel');

   

exports.getSkill = async (req, res) => {
    try {
      const skill = await skillSchema.find();
      res.json(skill);
    } catch (error) {
      res.status(500).json({ msg: 'Server problem' });
    }
  };
  



exports.addSkill = async (req, res) => {
    try {
      const newSkill = new skillSchema(req.body); // Create a new instance from request body
      const savedSkill = await newSkill.save(); // Save the new skill data
      res.json({msg:'Skill added'}); // Send the newly created skill data
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server problem' });
    }
  };
  

//........get specific skill user by id..............
exports.getSkillId=async (req,res)=>{

    try {

        const skill = await skillSchema.findById(req.params.id);
        if (!skill) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(skill);
        
    } catch (error) {
        res.status(500).json({ msg: 'Server problem' });
    }

}

//........update specific user by id ..................
exports.updateSkill=async(req,res)=>{
    const {skill} = req.body;
 
 
    try {
 
     const newSkill = await skillSchema.findByIdAndUpdate(req.params.id, {
 
        skill
     
        });
     
        let results = await newSkill.save();
        await results;
        res.json({msg:'Item updated'})
     
    } catch (error) {
 
     res.status(500).json({ msg: 'Server problem' });
    }
    
 }


 //..........delete................
exports.delSkill=async(req,res)=>{
    const skill = await skillSchema.findByIdAndDelete(req.params.id)

    skill;

    res.json({msg:'Item deleted'})
   
}