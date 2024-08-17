import express from 'express';
const router = express.Router();
import createError from '../utils/createError.js';
import Plan from '../models/Plan.js';
import accessTokenAutoRefresh from '../middlewares/accessTokenAutoRefresh.js';
import passport from 'passport';



router.post("/",accessTokenAutoRefresh, passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const {roles}=req.user;
    if(roles!=="admin")createError(401,"Your are not authenticate")
    
        
    try {
        const {planTitle,pricePerMonth,planDetails,planId}=req.body;
        if (!planTitle || !planId ||!pricePerMonth) createError(400,"Plan Id and Title is missing")
        const planExist=await Plan.findOne({"planId":planId})
        if(planExist)createError(400,"This Plan Already exist")
        const plan=new Plan(req.body);
        const savePlan=await plan.save()
        res.json(savePlan)


    } catch (error) {
        console.log(error);
        
    }
})


router.get("/",async(req,res)=>{
    try {
        const plan=await Plan.find()
        res.json(plan)
    } catch (error) {
        console.log(error);
        
    }
})
router.get("/:planId",async(req,res)=>{
    try {
        const plan=await Plan.findOne({'planId':planId})
        res.json(plan)
    } catch (error) {
        console.log(error);
        
    }
})

export default router;
