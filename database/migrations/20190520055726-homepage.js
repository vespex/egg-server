'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      uid: STRING(32),
      name: STRING(30),
      username: STRING(30),
      password: STRING(32),
      nickname: STRING(30),
      avator: STRING(100),
      address: STRING(200),
      remark: STRING(300),
      sex: INTEGER,
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
