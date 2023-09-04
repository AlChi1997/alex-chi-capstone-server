const knex = require('knex')(require('../knexfile'));

const getEducation = async(_req,res)=>{
    try{
        const {id} = _req.params;
        const education = await knex('education').where({user_id:id});
        res.json(education);
    } catch(err){
        console.error(err);
        res.status(500).json({message:'An error occured during education retrieval'});
    };
};

module.exports = {getEducation};