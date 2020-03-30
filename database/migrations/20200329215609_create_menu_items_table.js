exports.up = function(knex) {
    return knex.schema.createTable('menu_items', table => {
        table.increments('id');
        table.integer('category').notNullable()
        .references('id').inTable('menu_categories');
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('image');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('menu_items');
};
