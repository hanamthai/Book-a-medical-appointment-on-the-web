// migrations file is used to map(ánh xạ) between model and database
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {   //MySQL automatically converts to lowercase 
      //statusId: DataTypes.STRING,
      // doctorId: DataTypes.INTEGER,
      // patientId: DataTypes.INTEGER,
      // date: DataTypes.DATE,
      // timeType: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.STRING
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      timeType: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookings');
  }
};