const mongoose= require("mongoose")
const resumeSchema=new mongoose.Schema(
    {
        Name:String,
        age:String,
        mobileno:String,
        address:String,
        Emailid:String,
        password:String

    }
)
module.exports=mongoose.model("resume",resumeSchema)