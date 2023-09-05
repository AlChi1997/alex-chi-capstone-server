exports.up =function(knex){
    return knex.schema.createTable('careers',(table)=>{
        table.increments('id');
        table.string('Career_Title').nullable().defaultTo(null);
        table.string('Description').nullable().defaultTo(null);
        table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
    });
}

exports.down =function(knex){
    return knex.schema.dropTable('careers');
};