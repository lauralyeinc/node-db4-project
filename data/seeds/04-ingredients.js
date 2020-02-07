
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {id: 1 , name: 'Diary', quantity_id: 75}, 
        {id: 2 , name: 'Vegetables', quantity_id: 25 },
        {id: 3 , name: 'Fish/Seafood', quantity_id: 25 },
        {id: 4 , name: 'Poultry', quantity_id: 25 },
        {id: 5 , name: 'Beverage', quantity_id: 25 },
        {id: 6 , name: 'Red Meat', quantity_id: 25 },
        {id: 7 , name: 'Confectionery', quantity_id: 25},
        // {id:  , name: '', quantity_id:   },
      ]);
};
