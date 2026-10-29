const express=require('express')
const router=express.Router()
const {createPost,allPost,deletePost,updatepost}=require('../controller/postController')

router.get('/getallpost',allPost)
router.post('/createPost',createPost)
router.delete('/deletePost/:id',deletePost)
router.put('/updatePost/:id',updatepost)

module.exports=router