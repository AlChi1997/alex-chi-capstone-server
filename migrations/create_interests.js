exports.up =function(knex){
    return knex.schema.createTable('interests',(table)=>{
        table.increments('id');
        table.string('Interest_1').nullable().defaultTo(null);
        table.string('Interest_2').nullable().defaultTo(null);
        table.string('Interest_3').nullable().defaultTo(null);
        table.string('Interest_4').nullable().defaultTo(null);
        table.string('Interest_5').nullable().defaultTo(null);
        table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
    });
}

exports.down =function(knex){
    return knex.schema.dropTable('interests');
};