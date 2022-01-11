const express=require('express');
const Employee=require('../models/Employee');

exports.createEmployee=async(req,res,next)=>{
 const {name,dateOfBirth,gender,salary}=req.body;
 const newEmployee=new Employee({
    name,dateOfBirth,gender,salary
 });
 try{

    const yes= newEmployee.save()
    if(!yes){
       res.status(400).json({message:"error happen while adding employee"})
    }
  }
  catch(err){
     res.json(err)
  }
     
     res.status(200).json({message:"Successfuly added an employee"})
}

exports.getEmployee=async(req,res,next)=>{
    try{
        const employee=await Employee.find();
          res.status(200).json({employee})
      }catch(err){
         res.status(400).json({
            status:'fail',
            message:err
         })
      }
}
exports.updateEmployee=async(req,res,next)=>{
console.log(req.params)
    try{
        
        const updatedEmployee=  await Employee.findByIdAndUpdate(req.params.id,
                                                           req.body,
                                                          )
        res.json({
           status:'success',
           data:{updatedEmployee}
        })
     }catch(err)
        {
           res.json({
              status:'fail',
              message:err
           })
        }
    
}
exports.deleteEmployee=async(req,res,next)=>{
     
    await Employee.findByIdAndDelete(req.params.id);

    res.json({
       status:'success',
       message:'Employee successfuly deleted'
    })
    
}