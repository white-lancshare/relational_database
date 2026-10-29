const {post,user}=require('../models')

const createPost=async(req,res)=>{
    try{
    const{title,body,userId}=req.body
    const created= await post.create({
        title,body,userId
    })
    res.status(201).json({
        message:"post uploaded sucessfully",
        data:created
    })
}catch(e){
    res.status(500).json({message:"there is an error",
        err:e.message
    })
}
}
  const allPost=async (req,res)=>{
try{
    const finder= await post.findAll({
        include:{
            model:user,
            attributes:['firstName','lastName','email']
        }
    })
    res.status(200).json({
        message:`there are ${finder.length} post stored in the db`,
        data:finder
    })
}catch(e){
    res.status(500).json({
        message:"there is a server error",
        err:e.message
    })
}
  }

  const deletePost= async (req,res)=>{
    try{
    const id=req.params.id
    const finder= await post.findByPk(id)
    if(!finder){
        return res.status(404).json({
            message:"post not  found"
        })
    }
   const deleted= await post.destroy({where:{id}})
   res.status(200).json({
    message:"post deleted sucessfully",
    data:deleted
   })
}catch(e){
    res.status(500).json({
    message:"there is a server error",
     err:e.message
    })
}
  }
  const updatepost=async (req,res)=>{
    try{
    const id=req.params.id
    const finder= await post.findByPk(id)

    if(!finder){
    return   res.status(404).json({
            message:"user not found"
        })
    }
    const {title,body}=req.body
   const updated= await post.update({title,body},
    {where:{id}}
   )

   res.status(200).json({
    message:"updated successfuly",
    data:updated
   })

    }
     catch(e){
        res.status(500).json({
    message:"there is a server error",
     err:e.message
    })

    }
  }

  

module.exports={createPost,allPost,deletePost,updatepost}