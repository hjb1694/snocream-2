exports.up = function(knex) {
  return knex.schema.createTable('specials_offers', table => {
      table.increments('id');
      table.string('offer_name').notNullable();
      table.string('offer_description').notNullable();
      table.string('offer_image'); 
      table.date('expiration_date');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('specials_offers');
};
