/* eslint valid-jsdoc: "off" */

'use strict';

const { dialect, host, database, username, password } = require('../database/config.json').development;

exports.sequelize = {
  dialect,
  host,
  database,
  username,
  password,
  port: 3306,
};

exports.security = {
  domainWhiteList: [ 'http://localhost:8080', 'http://127.0.0.1:8080', 'http://127.0.0.1:10086' ],
  // csrf: false,
};

