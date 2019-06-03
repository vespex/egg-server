'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, DATE, STRING, TEXT, UUID } = Sequelize;
    await queryInterface.createTable('blogs', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING,
      description: STRING,
      poster: STRING,
      content: TEXT,
      author: STRING,
      uid: UUID,
      type: INTEGER,
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
