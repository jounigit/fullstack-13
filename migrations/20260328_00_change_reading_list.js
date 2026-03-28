const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.renameColumn('reading_lists', 'read', 'is_read');
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.renameColumn('reading_lists', 'is_read', 'read');
  }
};