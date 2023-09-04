const knex = require('knex')(require('../knexfile'));

const signup =async(_req,res)=>{
    try{

        const {username,password} = _req.body;

        if(!username || !password){
            return res.status(400).json({message:'Username and password are required'});
        }

        const [userId] = await knex('users').insert({
            username: username,
            password: password,
        });
        await knex('profile').insert({
            username: username,
            password: password,
            user_id: userId
        });
        res.json({message:'User created successfully'});
    } catch(err){
        console.error(err);
        res.status(500).json({message:'An error occured during user creation'});
    };
};

module.exports = {signup};