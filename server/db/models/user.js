'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('user', {
    firstName : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    lastName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    music : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    dining : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    parties : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    boardGames : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    videoGames : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    movies : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    vacations : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    projects : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    events : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    weekendNight : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    },
    weekdayNight : {
        type : Sequelize.INTEGER,
        defaultValue : 50
    }
});
