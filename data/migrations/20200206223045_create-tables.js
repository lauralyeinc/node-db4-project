
exports.up = function(knex) {
    return (knex.schema
        .createTable('quantiy of ingredients', tbl => {
            tbl.increments();
            tbl.float('# of wet measurement');
            tbl.float('# of dry measurement')
        }))
        .createTable('courses', tbl => {
            tbl.icrements();
            tbl.string('type of course', 128).unique(); 
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('action', 128).notNullable().unique();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 128),notNullable().unique();
            tbl.integer('quanity_id')
                .unsigned()
                .notNullable()
                .reference('id')
                .inTable('quanity of ingredients');
        })
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .reference('ingredients.id');
            tbl.integer('instructions_id')
                .unsigned()
                .notNullable()
                .reference('instructions.id');
            tbl.integer('course_id')
                .unsigned()
                .notNullable()
                .unsigned()
                .reference('courses.id');
        });
};

exports.down = function(knex) {
    return (knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('courses')
        .dropTableIfExists('quanity of ingredients')
    );
};
