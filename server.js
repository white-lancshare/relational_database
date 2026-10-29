const express=require('express')
const app=express()
const PORT=2000
const sequelize=require('./database/database')
const userController=require('./routes/userRoutes')
const postController=require('./routes/postRoutes')

app.use(express.json())
app.use(userController)
app.use(postController)

sequelize.authenticate().then(()=>{
    console.log('server connected sucessfully')
}).catch((e)=>{
 console.log('there is an error', e.message)
})

app.listen(PORT,()=>{
    console.log(`server is listening to port ${PORT}`)
})