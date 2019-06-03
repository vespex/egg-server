'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, UUID } = app.Sequelize;

  const User = app.model.define('blog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uid: UUID,
    name: STRING,
    nickname: STRING,
    avator: STRING,
    sex: INTEGER,
    address: STRING,
    type: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  }, { timestamps: false });

  return User;
};
