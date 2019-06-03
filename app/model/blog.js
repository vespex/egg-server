'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT, UUID } = app.Sequelize;

  const User = app.model.define('blog', {
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
  }, { timestamps: false });

  return User;
};
