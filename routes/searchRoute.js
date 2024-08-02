// routes/searchRoute.js
import passport from 'passport'

import express from 'express';
import accessTokenAutoRefresh from '../middlewares/accessTokenAutoRefresh.js';
import UserModel from '../models/User.js';
const router = express.Router();

router.post('/', accessTokenAutoRefresh, passport.authenticate('jwt', { session: false }), async(req, res) => {
   
    const { _id, planId, searchApiHitCount, searchApiHitDay = new Date().getDate() } = req.user;
    if (planId === "1") {
        if (searchApiHitDay === new Date().getDate().toString()) {
            
            if (searchApiHitCount < 10) {
                let newSearchCount = searchApiHitCount + 1;
                await UserModel.findByIdAndUpdate(_id, { $set: { searchApiHitCount:newSearchCount,searchApiHitDay:new Date().getDate() } })
                res.status(200).json({message:"Your Result Here"})
            }else{
                res.status(201).json({
                    message:"You Need  to upgrade your plan"
                })
            }
        }else{
            let newSearchCount = 1;
            await UserModel.findByIdAndUpdate(_id, { $set: { searchApiHitCount:newSearchCount,searchApiHitDay:new Date().getDate() } })
            res.status(200).json({message:"Your Result Here"})
        }

    }


});

export default router;
