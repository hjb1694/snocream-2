const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'seed-data', 'menu-categories.json'), 'utf-8'));


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_categories').insert(data);
    });
};
