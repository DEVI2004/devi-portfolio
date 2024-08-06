


// const userSchema = require('../server/models/userModel');
const userSchema = require('../models/userModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');


const userCtrl = {

    //register
    registerUser:async (req,res) =>{
    const { username, email, password} = req.body;


    try {

        const user = await userSchema.findOne({email:email});
    if(user){
        return res.status(400).json({msg:"Email already exists"})
    }
    
    //create big password and then update the schema

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new userSchema({
        username:username,
        email:email,
        password:passwordHash
    })

    await newUser.save();
    res.json({msg: "register success"})
        
    } catch (error) {
        return res.status(500).json({msg:error.message})
        
    }
    

    },



    //login
    loginUser:async (req,res) =>{
        
        try {

            const {email,password} = req.body;
            const user = await userSchema.findOne({email:email})
            if(!user){
                return res.status(400).json({msg:'User does not exist'}) 
            }
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(400).json({msg:"Incorrect Password"})
            }

            //if login is succesful
            const payload = {
                id:user._id,
                name:user.username
            }

            const token = jwt.sign(payload,process.env.TOKEN_SECRET,
                {expiresIn : "1d"})

            res.json({token})
            
        } catch (error) {

            return res.status(500).json({msg:error.message})
            
        }
    },


    
    //verify
    verifiedToken:(req,res) =>{
        
        try {

            const token = req.header("Authorization")
            if(!token) return res.send(false)

            jwt.verify(token, process.env.TOKEN_SECRET,async(err,verified)=>{
                if(err) return res.send(false)

                const user = await userSchema.findById(verified.id)
                if(!user) return res.send(false)
                    return res.send(true)
            })    
        } catch (err) {
            return res.status(500).json({msg:error.message})
            
        }




    },    

    
}   


module.exports = userCtrl;
