exports.up = function(knex) {
    //create table
    return knex.schema.createTable("dishes", tbl => {
      tbl.increments();
  
      tbl.string("name", 50).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dishes");
  };