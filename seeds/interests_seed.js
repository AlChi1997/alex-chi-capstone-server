exports.seed = async function(knex) {
    await knex('interests').del();
    await knex('interests').insert([
        {
        Interest_1: 'Software Engineering',
        Interest_2: 'Video Games',
        Interest_3: 'Sports',
        Interest_4: 'Singing',
        Interest_5: 'Partying',
        user_id: 1
        }
    ])
};