const express=require("express")
const resumeModel=require("../models/resumemodel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=req.body.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword);
            data.password=hashedPassword
            console.log(data);
            let resume=new resumeModel(data)
            let result=resume.save()
            res.json({
                status:"success"
            })
        }
    )
})

router.post("/signin",async(req,res)=>{
    let input=req.body
          let Emailid=req.body.Emailid
          let data=await resumeModel.findOne({"Emailid":Emailid})
          if(!data)
          {
            return res.json({
                status:"invalid user"
            })
          }
          console.log(data)
          let dbPassword=data.password
          let inputPassword=req.body.password
          console.log(dbPassword)
          console.log(inputPassword)
          const match=await bcrypt.compare(inputPassword,dbPassword)
          {
            if(!match)
            {
                return res.json({
                    status:"invalid password"
                })
            }
          }
          res.json({
            status:"suscfuly login"
          })
})

module.exports=router;