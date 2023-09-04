exports.up =function(knex){
    return knex.schema.createTable('profile',(table)=>{
        table.increments('id');
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('phone_number').notNullable();
        table.string('user_id').notNullable();
    });
}

exports.down =function(knex){
    return knex.schema.dropTable('profile');
};