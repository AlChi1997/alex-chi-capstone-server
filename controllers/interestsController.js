const knex = require('knex')(require('../knexfile'));

const getInterests = async(_req,res)=>{
    try{
        const {id} = _req.params;
        const interests = await knex('interests').where({user_id:id});
        res.json(interests);
    } catch(err){
        console.error(err);
        res.status(500).json({message:'An error occured during interests retrieval'});
    };
};

const updateInterests = async(_req,res)=>{
    console.log(_req.body);
    try{
        const {interest1, interest2, interest3, interest4,interest5, user_id} = _req.body;
        const interests = await knex('interests').where({user_id});
        
        const existingInterests = await knex('interests').where({ user_id }).first();

        if (!existingInterests) {
            await knex('interests').insert({
                Interest_1: interest1,
                Interest_2: interest2,
                Interest_3: interest3,
                Interest_4: interest4,
                Interest_5: interest5,
                user_id: user_id
            });
            res.json({ message: 'Interests created successfully' });
        } else {
            await knex('interests').where({ user_id }).update({
                Interest_1: interest1,
                Interest_2: interest2,
                Interest_3: interest3,
                Interest_4: interest4,
                Interest_5: interest5,
                user_id: user_id
            });
            res.json({ message: 'Interests updated successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during interests update' });
    }
}

module.exports = {
    getInterests,
    updateInterests
};