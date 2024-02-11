const mongoose=require("mongoose")
const postSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,
        },
        photo:{
            type:String,
            required:true,
        },
        phoneNo:{
            type:String,
            required:true,
        },
        Address:{
            type:String,
            required:true,
        },
        EmailID:{
            type:String,
            required:true,
        },
        PG:{
            type:String,
            required:true,
        },
        UG:{
            type:String,
            required:true,
        },
        plustwo:{
            type:String,
            required:true,
        },
        project:{
            type:String,
            required:true,
        },
        skill:{
            type:String,
            required:true,
        },

    }
)

module.exports=mongoose.model("resumePost",postSchema)