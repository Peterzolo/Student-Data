const express = require('express');
const studentRouter = express.Router();
const Student = require('../model/Student');

//CRUD

//read
studentRouter.get('/',(req,res)=>{
    Student.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody: "Unable to get Student's Info",
                msgError : true
            }});
        else{
            res.status(200).json({response});
        }
            
    });
});

//create
studentRouter.post('/',(req,res)=>{
    const student = new Student(req.body);
    student.save((err,document)=>{
        if(err)
            res.status(500).json({message:{
                msgBody: "Unable to add Student's Info",
                msgError : true
            }});
        else
            res.status(200).json({message:{
                msgBody: "Successfully Added Student's Info",
                msgError : false
            }});
    });
});

// delete
studentRouter.delete('/:id',(req,res)=>{
    Student.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                msgBody: "Unable to Delete Student's Info",
                msgError : true
            }});  
        else
            res.status(200).json({message:{
                msgBody: "Successfully Deleted Student's Info",
                msgError : false
            }});     
    });
});

//update 
studentRouter.put('/:id',(req,res)=>{
    Student.findOneAndUpdate({_id : req.params.id},req.body,{runValidators: true},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Update Student's Info",
                msgError : true
            }});
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated Student's Info",
            msgError : false
        }});   
    });
});

module.exports = studentRouter;