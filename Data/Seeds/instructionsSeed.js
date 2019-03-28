exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("instructions")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("instructions").insert([
          { recipe_id: 1, order: 1, step_description: "Find meat" },
          { recipe_id: 1, order: 2, step_description: "Cook meat" },
          {
            recipe_id: 1,
            order: 3,
            step_description: "Stuff meat into taco with rest of ingredients"
          },
          { recipe_id: 2, order: 3, step_description: "Throw salt into the taco" },
          {
            recipe_id: 2,
            order: 2,
            step_description: "Find tacos somebody else already made"
          },
          { recipe_id: 2, order: 1, step_description: "Find your pan" },
          { recipe_id: 3, order: 1, step_description: "Kill the cow and steal its ribs" },
          {
            recipe_id: 3,
            order: 2,
            step_description: "slow dem cook ribs for 8hrs"
          },
          {
            recipe_id: 3,
            order: 3,
            step_description: "Salivate extensively while awaiting delicious ribs."
          },
          { recipe_id: 4, order: 1, step_description: "find somebody else's ribs" },
          { recipe_id: 4, order: 2, step_description: "eat all of them ribs" },
          { recipe_id: 5, order: 1, step_description: "Get refused service from pizza hut, for no shoes and no shirt" },
          {
            recipe_id: 5,
            order: 2,
            step_description: "frantically smash them into a rough oval shape"
          },
          {
            recipe_id: 5,
            order: 3,
            step_description:
              "Throw the battered dough ball into the helishly hot oven until it smells done"
          },
          {
            recipe_id: 5,
            order: 4,
            step_description: "Melt your face while trying to guzzle down the mashed pizza you made"
          }
        ]);
      });
  };