exports.up = function(knex) {
  return knex.schema.createTable('menu_categories', table => {
    table.increments('id');
    table.string('category').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('menu_categories');
};
