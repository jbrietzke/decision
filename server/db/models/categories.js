'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('category', {
    music : {
      type : Sequelize.INTEGER,
      defaultValue : 50
    },
    dining : {
      type : Sequelize.INTEGER,
      defaultValue : 50
    }
});
