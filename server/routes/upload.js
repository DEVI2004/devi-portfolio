const router = require('express').Router();
const cloudinary = require('cloudinary');
const fs = require('fs');


//we will upload image to cloudinary

cloudinary.config({

    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET

})

//post upload image

router.post('/upload', (req,res) =>{

    try {

        
        if(!req.files || Object.keys(req.files).length===0){
            return res.status(400).send('no files uploaded')
        }
        
        const file = req.files.file;
        if(file.size>1024*1024){


            removeTmp(file.tempFilePath);
            return res.status(400).json({msg:'size is too big'})
        }


        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png')
        {
            removeTmp(file.tempFilePath);
            return res.status(400).json({msg:'incorrect file format'})
        }


        cloudinary.v2.uploader.upload(file.tempFilePath, {folder:"portfolio"},
            async(err,results)=>{
                if(err) throw err;

                removeTmp(file.tempFilePath);
                res.json({public_id:results.public_id, url:results.secure_url})
            })



    } catch (err) {

        res.status(500).json({msg:err.message})
        
    }
})

//delete image
router.post('/destroy', (req,res)=>{

    const {public_id} = req.body;

    try {

        if(!public_id){
            return res.status(400).json({msg:"no images selected"})
        }
    
        cloudinary.v2.uploader.destroy(public_id, async(err,result)=>{
            if(err) throw err;
            res.json({msg:"Image deleted"})
            
        })
        
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
   
})


const removeTmp=(path)=>{
    fs.unlink(path,err =>{
        if(err) throw err;
    })

}


module.exports = router;