


// const achievementSchema = require('../models/achievementModel');




// //.........get achievement user.....
// // exports.getAchievement = async(req,res)=>{

// //     const achievement = await achievementSchema.find();
    
// //     res.json(achievement);
    
// //     try {
// //         res.json(achievement);
// //     } catch (error) {
// //         res.status(500).json({msg:'server problem'})
        
// //     }
    
// // }    

// exports.getAchievement = async (req, res) => {
//     try {
//       const achievement = await achievementSchema.find();
//       res.json(achievement);
//     } catch (error) {
//       res.status(500).json({ msg: 'Server problem' });
//     }
//   };
  

// //......add achievement user.........
// // exports.addAchievement = async (req, res) => {
// //     try {
// //       const achievement = await achievementSchema.find();
// //       res.json(achievement); // Send the response once data is retrieved
// //     } catch (error) {
// //       console.error(error); // Log the error for debugging
// //       res.status(500).json({ msg: 'Server problem' }); // Send an error response
// //     }

// // }

// exports.addAchievement = async (req, res) => {
//     try {
//       const newAchievement = new achievementSchema(req.body); // Create a new instance from request body
//       const savedAchievement = await newAchievement.save(); // Save the new experince data
//       res.json({msg:'achievement added'}); // Send the newly created experince data
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ msg: 'Server problem' });
//     }
//   };
  

// //........get specific achievement user by id..............
// exports.getAchievementId=async (req,res)=>{

//     try {

//         const achievement = await achievementSchema.findById(req.params.id);
//         res.json(achievement);
        
//     } catch (error) {
//         res.status(500).json({ msg: 'Server problem' });
//     }

// }

// //........update specific user by id ..................
// exports.updateAchievement=async(req,res)=>{
//     const {achievement} = req.body;
 
 
//     try {
 
//      const newAchievement = await achievementSchema.findByIdAndUpdate(req.params.id, {
 
//         achievement
     
//         });
     
//         let results = await newAchievement.save();
//         await results;
//         res.json({msg:'Item updated'})
     
//     } catch (error) {
 
//      res.status(500).json({ msg: 'Server problem' });
//     }
    
//  }


//  //..........delete................
// exports.delAchievement=async(req,res)=>{
//     const achievement = await achievementSchema.findByIdAndDelete(req.params.id)

//     achievement;

//     res.json({msg:'Item deleted'})
   
// }