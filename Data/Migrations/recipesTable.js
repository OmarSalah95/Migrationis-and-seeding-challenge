exports.up = function(knex) {
    return knex.schema.createTable("recipes", (tbl) => {
      tbl.increments();
  
      tbl.string("name", 50).notNullable();

      tbl
        .integer("dish_id")
        .references("id")
        .inTable("dishes")
        .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipes");
  };