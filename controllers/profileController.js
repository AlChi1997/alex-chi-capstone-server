const knex = require('knex')(require('../knexfile'));

const updateProfile = async (_req, res) => {
    console.log(_req.body);
    try {
        const { firstname, lastname, email, phonenumber,user_id } = _req.body;

        if (!firstname || !lastname || !email || !phonenumber) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingProfile = await knex('profile').where({ user_id }).first();

        if (!existingProfile) {
            await knex('profile').insert({
                first_name: firstname,
                last_name: lastname,
                email: email,
                phone_number: phonenumber,
                user_id: user_id
            });
            res.json({ message: 'Profile created successfully' });
        } else {
            await knex('profile').where({ user_id }).update({
                first_name: firstname,
                last_name: lastname,
                email: email,
                phone_number: phonenumber
            });
            res.json({ message: 'Profile updated successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during profile update' });
    }
}

module.exports = { updateProfile };