const express = require('express')
const userRoute=express.Router()
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel } = require('../Model/UserModel');
userRoute.post('/register',async(req,res)=>{
    const {email,password,name,gender}=req.body
    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            // Store hash in your password DB.
            const user=new UserModel({name,email,gender,password:hash})
            await user.save()
            res.status(200).send({"msg":"New User Added"})
        });
    } catch (err) {
        res.status(400).send({"msg":err.msg})
    }
})
userRoute.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,async(err,result)=>{
                if(result){
                    const token=jwt.sign({userId:user._id},'pritam')
                    res.status(200).send({"msg":"Login Successfull","token":token})
                }else{
                    res.status(200).send({"msg":"wrong Credential!"})
                }
            })
        }else{
            res.status(200).send({"msg":"wrong Credential!"})
        }
    } catch (err) {
        res.status(400).send({"msg":err.msg})
    }

})
module.exports={userRoute}