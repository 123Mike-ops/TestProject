const mongoose=require('mongoose');

const employeeSchema=mongoose.Schema({
    name:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    gender:{type:String,required:true},
    salary:{type:Number,required:true},

});
module.exports=mongoose.model('Employee',employeeSchema); 