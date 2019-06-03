/* eslint valid-jsdoc: "off" */

'use strict';
const { dialect, host, database, username, password } = require('../database/config.json').production;
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1557900729341_976';

  // add your middleware config here
  // config.middleware = [ 'resFormat' ];
  config.view = { defaultViewEngine: 'nunjucks' };
  config.sequelize = {
    dialect,
    host,
    username,
    password,
    database,
    port: 3306,
  };
  config.cors = {
    credentials: true,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
