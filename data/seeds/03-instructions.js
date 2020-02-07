
exports.seed = function(knex) {
  return knex('instructions').insert([
    { id: 1 , action: 'fry' },
    { id: 2 , action: 'mix' },
    { id: 3 , action: 'simmer' },
    { id: 4 , action: 'bake' },
    { id: 5 , action: 'toss' },
    { id: 6 , action: 'broil' },
    { id: 7 , action: 'pour' },
    { id: 8 , action: 'braised' },
    { id: 9 , action: 'cut' },
    { id: 10 , action: 'whip' },
    // { id:  , action: '' }
  ]);
};
