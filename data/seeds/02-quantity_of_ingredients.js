
exports.seed = function(knex) {
  return knex('quantity_of_ingredients').insert([
    { id: 75 }
  ]);
};
