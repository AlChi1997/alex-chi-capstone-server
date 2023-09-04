const knex = require('knex')(require('../knexfile'));

const getUser = async(_req,res)=>{
    try{
        const {id} = _req.params;
        const user = await knex('profile').where({user_id:id});
        res.json(user);
    } catch(err){
        console.error(err);
        res.status(500).json({message:'An error occured during user retrieval'});
    };
};

module.exports = {getUser};