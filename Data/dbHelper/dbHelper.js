const db = require('../dbConfig.js');

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
};
function getDishes() {
    return db('dishes');
  }
function getDish(id) {
return db('')
    .where({ id })
    .first();
}

function addDish(dish) {
    return db('')
      .insert(dish)
      .then(ids => {
        return getById(ids[0]);
      });
  }
  function getRecipes() {
    return db('recipes');
  }
  function addRecipe(recipe) {
    return db('')
    .insert(recipe)
    .then(ids => {
      return getById(ids[0]);
    });
  }