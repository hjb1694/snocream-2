exports.up = function(knex) {
    return knex.schema.createTable('admin_users', table => {
        table.increments('id');
        table.string('username').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('admin_users');
};
