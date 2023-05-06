const express=require('express')
const { UserPlanModel } = require('../../model/plan/userPlan.model')

const userPlanRoute=express.Router()
userPlanRoute.post('/add',async(req,res)=>{
    try{
        const plan=new UserPlanModel(req.body)
        await plan.save()
        res.status(200).send({"msg":"New user plan Added"})
    }catch(err){
        res.status(400).send({"msg":err})
    }
})

userPlanRoute.get('/',async(req,res)=>{
    try{
        const plan=await UserPlanModel.find({userId:req.body.userId})
        res.send(plan)
    }catch(err){
        res.status(400).send({"msg":err})
    }
})

module.exports={userPlanRoute}