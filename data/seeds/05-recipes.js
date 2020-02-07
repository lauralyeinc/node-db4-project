
exports.seed = function(knex) {
      return knex('recipes').insert([
        { id: 1 , name: 'Mozzarella Sticks', course_id: 1 , instructions_id: 1 , ingredients_id: 1},
        { id: 2 , name: 'Bruschetta', course_id: 2 , instructions_id: 2 , ingredients_id: 2},
        { id: 3 , name: 'French Onion', course_id: 3 , instructions_id: 3 , ingredients_id: 2 },
        { id: 4 , name: 'Ratatouille', course_id: 4 , instructions_id: 4 , ingredients_id: 2 },
        { id: 5 , name: 'Garden Salad', course_id: 5 , instructions_id: 5 , ingredients_id: 2 },
        { id: 6 , name: 'Herb Tilapia', course_id: 6 , instructions_id: 6 , ingredients_id: 3 },
        { id: 7 , name: 'Lemon Chicken', course_id: 7 , instructions_id: 4 , ingredients_id: 4 },
        { id: 8 , name: 'Prosecco', course_id: 8 , instructions_id: 7 , ingredients_id: 5 },
        { id: 9 , name: 'Stuffed Lamb', course_id: 9 , instructions_id: 8 , ingredients_id: 6 },
        { id: 10 , name: 'Assortment Palater', course_id: 10 , instructions_id: 9 , ingredients_id: 1 },
        { id: 11 , name: 'Chocolate Mousse', course_id: 11 , instructions_id: 10 , ingredients_id: 7 },
        { id: 12 , name: 'Fruity Macaroons', course_id: 12 , instructions_id: 4 , ingredients_id: 7 },
        // { id:  , name: '', course_id:  , instructions_id:  , ingredients_id:  },
      ]);
};
