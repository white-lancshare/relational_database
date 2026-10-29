const express=require('express')
const router=express.Router()
const {createUser,getAll,getOne,updateUser, deleteUser}=require('../controller/userController')


router.post('/createUser', createUser)
router.get('/getall', getAll)
router.get('/getOne/:id',getOne)
router.put('/update/:id',updateUser)
router.delete('/deleteUser/:id',deleteUser)
module.exports=router