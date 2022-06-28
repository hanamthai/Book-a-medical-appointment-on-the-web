'use strict';

module.exports = {
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // address: DataTypes.STRING,
  // email: DataTypes.STRING,
  // password: DataTypes.STRING,
  // gender: DataTypes.BOOLEAN,
  // roleId: DataTypes.STRING,
  // phonenumber: DataTypes.STRING,
  // positionId: DataTypes.STRING,
  // image: DataTypes.STRING
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Thai',
      lastName: 'Ha',
      address: 'Ho Chi Minh',
      email: 'admin@gmail.com',
      password: '123456',
      gender: 1,
      roleId: 'R1',
      phonenumber: '0383292556',
      positionId: 'P4',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
