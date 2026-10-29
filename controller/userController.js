const {user,post}=require('../models')

const createUser= async(req,res)=>{
    try{
    const {firstName,lastName,email,gender}=req.body
    const create= await user.create({
        firstName,lastName,email,gender
    })
   res.status(201).json({
    message:"user created sucessfully",
    user:create
   })

}catch(e){
    res.status(500).json({
        message:"error occured on your server try again",
        error:e.message
    })
}
}

const getAll=async (req,res)=>{
    try{
    const value= await user.findAll({
        include:{
            model:post,
            attributes:['title','body']
        }
    })
   res.status(200).json({
    message:`there is ${value.length} user in the database`,
    val:value
   })

    }catch(e){
           res.status(500).json({
        message:"error occured on your server try again",
        error:e.message
    })  
    }
}
 const getOne=async(req,res)=>{
    try{
   const id=req.params.id
   const findUser= await user.findOne({where:{id}})

   if(!findUser){
    return res.status(400).json({
        message:"user not found"
    })
   }
   res.status(200).json({
    message:"user found sucessfuly",
    user:findUser
   })

    }catch(e){
     res.status(500).json({
        message:"user found sucessfuly",
        err:e.message
     })
    }
 }
  const updateUser=async(req,res)=>{
try{
    const id=req.params.id
 const finder= await user.findByPk(id)
 if(!finder){
    return res.status(404).json({
        message:"user not found"
    })
 }
    const {firstName,lastName,gender,email}=req.body
    const updated= await user.update({firstName,lastName,gender,email},{where:{id}})
        return res.status(200).json({
            message:"user updateed sucessfully",
            data:updated
        })
}catch(e){
    res.status(500).json({
        message:'there is a server  error',
        err:e.message
    })
}
  }

  const deleteUser= async (req,res)=>{
    const id=req.params.id
    const finder= await user.findByPk(id);
  if(!finder){
    return res.status(404).json({
        message:"user not  found"
    })
  }
    const deleted= await user.destroy({where:{id}})
    res.status(200).json({
        message:"user deleted sucessfully",
        data:deleted
    })
  }


module.exports={createUser,getAll,getOne,updateUser,deleteUser}