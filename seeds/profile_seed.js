exports.seed = async function(knex) {
    await knex('profile').del();
    await knex('profile').insert([
        {
        username: 'admin',
        password: 'admin',
        email: 'admin@launchpad.com',
        first_name: 'admin',
        last_name: 'admin',
        phone_number: 'admin',
        user_id: 1
        }
    ])
};