exports.seed = async function(knex) {
    await knex('users').del();
    await knex('users').insert([
        {
        username: 'admin',
        password: 'admin',
        }
    ])
};