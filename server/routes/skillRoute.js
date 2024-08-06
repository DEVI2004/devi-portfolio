

const router = require('express').Router();
const {getSkill , addSkill , getSkillId , updateSkill, delSkill} = require('../controlers/skillCtrl');


//......skill........................

//get skill user
router.get('/skill',getSkill);

//add skill user
router.post('/skill', addSkill);

//get specific skill by id
router.get('/skill/:id',getSkillId)

//update specific skill by id
router.put('/skill/update/:id',updateSkill)

//delete specific skill by id 
router.delete('/skill/:id',delSkill)


module.exports = router;
