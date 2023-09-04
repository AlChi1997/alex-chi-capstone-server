exports.seed = async function(knex) {
    await knex('education').del();
    await knex('education').insert([
        {
        Math: 97,
        Science: 95,
        Language: 99,
        user_id: 1
        }
    ])
};