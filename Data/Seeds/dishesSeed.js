exports.seed = function(knex) {
    return knex("dishes")
    // Deletes ALL existing entries
      .truncate()
      .then(function() {
        return knex("dishes").insert([
          { name: "tacos" },
          { name: "pork chops" },
          { name: "pizza" }
        ]);
      });
  };