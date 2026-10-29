'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
       defaultValue:Sequelize.UUIDV4
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      lastName:{
        type: Sequelize.STRING,
        allowNull:false
      },
      email:{
         type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      gender:{
        type: Sequelize.ENUM('male','female'),
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};