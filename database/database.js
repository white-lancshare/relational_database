const {Sequelize}=require('sequelize')

const sequelize= new Sequelize('social','root','root',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize