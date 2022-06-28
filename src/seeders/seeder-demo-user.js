'use strict';

module.exports = {
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // typeRole: DataTypes.STRING,
    // keyRole: DataTypes.STRING
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Thai',
      lastName: 'Ha',
      address: 'Ho Chi Minh',
      email: 'admin@gmail.com',
      password: '123456',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
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
