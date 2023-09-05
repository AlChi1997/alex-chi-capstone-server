exports.up =function(knex){
    return knex.schema.createTable('education',(table)=>{
        table.increments('id');
        table.integer('Math').nullable().defaultTo(null);
        table.integer('Science').nullable().defaultTo(null);
        table.integer('Language').nullable().defaultTo(null);
        table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
    });
}

exports.down =function(knex){
    return knex.schema.dropTable('education');
};