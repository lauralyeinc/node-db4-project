
exports.up = function(knex) {
    return (knex.schema
        .createTable('quantity_of_ingredients', tbl => {
            tbl.increments();
            tbl.float('# of wet measurement');
            tbl.float('# of dry measurement')
        }))
        .createTable('courses', tbl => {
            tbl.increments();
            tbl.string('type of course', 128).unique(); 
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('action', 128).notNullable().unique();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable().unique();
            tbl.integer('quantity_id')
                .notNullable()
                .unsigned()
                .references('quantity_of_ingredients.id');
        })
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id');
            tbl.integer('instructions_id')
                .unsigned()
                .notNullable()
                .references('instructions.id');
            tbl.integer('course_id')
                .unsigned()
                .notNullable()
                .unsigned()
                .references('courses.id');
        });
};

exports.down = function(knex) {
    return (knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('courses')
        .dropTableIfExists('quantity_of_ingredients')
    );
};
