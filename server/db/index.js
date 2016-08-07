'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
//var Category = require('./models/categories');

// User.belongsTo(Category, { constraints: true, foreignKeyConstraint:true  });
