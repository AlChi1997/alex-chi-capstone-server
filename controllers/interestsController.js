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

module.exports = {getInterests};