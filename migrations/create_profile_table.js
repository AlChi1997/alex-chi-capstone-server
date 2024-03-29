exports.up =function(knex){
    return knex.schema.createTable('profile',(table)=>{
        table.increments('id');
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').nullable().defaultTo(null);
        table.string('first_name').nullable().defaultTo(null);
        table.string('last_name').nullable().defaultTo(null);
        table.string('phone_number').nullable().defaultTo(null);
        table
            .integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
    });
}

exports.down =function(knex){
    return knex.schema.dropTable('profile');
};