'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.post,{
        foreignKey:'userId'
      })
    }
  }
  user.init( {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastName:{
        type: DataTypes.STRING,
        allowNull:false
      },
      email:{
         type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      gender:{
        type: DataTypes.ENUM('male','female'),
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }, {
    sequelize,
    modelName: 'user',
    timestamps:true
  });
  return user;
};