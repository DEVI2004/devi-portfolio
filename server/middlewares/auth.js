

const jwt = require('jsonwebtoken');
const auth = (req,res,next)=>{

    try {
        
        const token = req.header("Authorization");
        //check if token exists
        if(!token){
            return res.status(400).json({msg:"Invalid Authorization"})
        }

        // Remove 'Bearer' from the token
        const bearerToken = token.split(' ')[1];


        //verify the token
        jwt.verify(token, process.env.TOKEN_SECRET, (err,user)=>{
            if(err){
                return res.status(500).json({msg:"Authorization not valid"})
            }

            req.user = user;
            next();
        })
    } catch (error) {
        return res.status(400).json({msg:err.message})
        
    }
}


module.exports= auth;