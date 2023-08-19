
const express = require("express");   //imported the express library

const router = express.Router();

const mongoose  = require("mongoose");

const User = require('../models/userModel');




//create api
router.post('/',async (req,res)=>{
    console.log(req.body);
    const {name,email,age}=req.body;
    try{
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        });
        res.status(201).json(userAdded);
    
    }catch(error){
        console.log(error);
        res.status(400).json({error:error.message});
    }
   });


//creating get api
router.get('/',async(req,res)=>{
    
    try{
        const showAll = await User.find();
        res.status(200).json(showAll);
    
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
    
});


//get single user data based on _id
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    try{
        const singleUser = await User.findById({_id:id});
        res.status(200).json(singleUser);

    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message})
    }
});

router.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    try{
        const deleteUser = await User.findByIdAndDelete({_id:id});
        res.status(200).json(deleteUser);

    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message})
    }
});

router.patch('/edit/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,email,age}=req.body;

    try{
        const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateUser);

    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message})
    }
});

module.exports = router;