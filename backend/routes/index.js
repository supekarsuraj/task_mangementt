const express = require("express");
const router = express.Router();
const userController = require('../controllers/user_controllers');
const listController=require('../controllers/list_controllers');
const { authMiddleware } = require("../middleware/jwtMiddleware");



router.post('/signup',userController.createUser)//for create new account
router.post("/login",userController.login)//for login 
router.post('/list',authMiddleware,listController.insertList)//for insert list
 router.put('/updateTask',authMiddleware,listController.updateTask); //for update task
 router.delete('/deleteTask',authMiddleware,listController.deleteTask)//for delete task by id
 router.get('/display',authMiddleware,listController.displayAll);//for display all tasks
 router.get('/getby-status',authMiddleware,listController.getByStatus);//searchbystatus



module.exports = router;

