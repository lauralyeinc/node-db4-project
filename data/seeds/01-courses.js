
exports.seed = function(knex) {
  return knex('courses').insert([
    { id: 1 , type_of_course: "Hors d'oeuvres"},
    { id: 2 , type_of_course: 'Amuse-bouche'},
    { id: 3 , type_of_course: 'Soup'},
    { id: 4 , type_of_course: 'Appetizer'},
    { id: 5 , type_of_course: 'Salad'},
    { id: 6 , type_of_course: 'Fish'},
    { id: 7 , type_of_course: 'Main'},
    { id: 8 , type_of_course: 'Palate Cleanser'},
    { id: 9 , type_of_course: 'Second Main'},
    { id: 10 , type_of_course: 'Cheese'},
    { id: 11 , type_of_course: 'Dessert'},
    { id: 12 , type_of_course: 'Mignardise'}
  ])
};
