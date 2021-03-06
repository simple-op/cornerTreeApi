const mongoose=require("mongoose");


const schema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
     ,
     appliedJobs:{
         type: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'jobs'
          }]
        },
        
     }
    

     

,{
    timestamps:true
})






const model=mongoose.model("users",schema);

module.exports=model;