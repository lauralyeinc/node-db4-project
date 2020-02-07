
exports.seed = function(knex) {
  return knex('quantity_of_ingredients').insert([
    { id: 1 , amount: 75 },
    { id: 2 , amount: 25},
    //{ id:   , amount:  },
  ]);
};
