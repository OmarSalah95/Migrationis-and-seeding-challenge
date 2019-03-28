exports.up = function(knex) {
    return knex.schema.createTable("recipeIngredients", tbl => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .notNullable();
        
      tbl
        .integer("ingredient_id")
        .references("id")
        .inTable("ingredients")
        .notNullable();

      tbl.float("ingredient_amount").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipeIngredients");
  };