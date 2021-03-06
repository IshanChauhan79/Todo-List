const express =require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);

router.post('/create-newtodo',homeController.create);
router.post('/delete-todo',homeController.delete);
    

module.exports=router;