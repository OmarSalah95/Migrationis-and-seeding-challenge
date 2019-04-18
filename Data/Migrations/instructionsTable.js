exports.up = function(knex) {
    return knex.schema.createTable("instructions", tbl => {
      tbl.increments();

      tbl.string("step_description").notNullable();

      tbl
        .integer("order")
        .notNullable();

      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("instructions");
  };