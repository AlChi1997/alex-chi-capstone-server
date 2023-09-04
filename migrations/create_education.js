exports.up =function(knex){
    return knex.schema.createTable('education',(table)=>{
        table.increments('id');
        table.integer('Math').nullable().defaultTo(null);
        table.integer('Science').nullable().defaultTo(null);
        table.integer('Language').nullable().defaultTo(null);
        table.string('user_id').notNullable();
    });
}

exports.down =function(knex){
    return knex.schema.dropTable('education');
};