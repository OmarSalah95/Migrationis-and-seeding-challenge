exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("recipes")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("recipes").insert([
          { dish_id: 1, name: "Tex-Mex" }, //1
          { dish_id: 2, name: "BBQ pork" }, //2
          { dish_id: 3, name: "Wanna be Chicago pizza" } //
        ]);
      });
  };