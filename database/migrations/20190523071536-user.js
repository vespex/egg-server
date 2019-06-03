'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, DATE, STRING, UUID, UUIDV4, BOOLEAN } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, autoIncrement: true, primaryKey: true },
      uid: { type: UUID, defaultValue: UUIDV4 },
      username: STRING,
      password: STRING,
      nickname: STRING,
      mobile: STRING,
      avator: STRING,
      sex: { type: INTEGER, defaultValue: 1 },
      address: STRING,
      type: INTEGER,
      is_act: { type: BOOLEAN, defaultValue: true },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('blogs');
  },
};
