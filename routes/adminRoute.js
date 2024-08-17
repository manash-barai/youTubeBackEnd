
import express from 'express';
import passport from 'passport'
import AdminController from '../controllers/adminController.js';
import accessTokenAutoRefresh from '../middlewares/accessTokenAutoRefresh.js';
import UserModel from '../models/User.js';
const router = express.Router();

router.get('/', AdminController.AllUserList)
router.put('/:id', async(req,res)=>{
        
    try {
        const updateUser=await UserModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.json(updateUser)
    } catch (error) {
        console.log(error);
        
    }
})

export default router