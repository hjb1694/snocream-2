const {env} = require('../config');
const knex = require('knex');
const knexfile = require('../knexfile');

module.exports = knex(knexfile[env]);