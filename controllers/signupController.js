const knex = require('knex')(require('../knexfile'));

const signup =(_req,res)=>{
    knex('users').insert({
        username: _req.body.username,
        password: _req.body.password,
    }).then(()=>{
        res.json({message:'User created successfully'});
    }).catch((err)=>{
        console.error(err);
        res.status(500).json({message:'An error occured during user creation'});
    });
};

module.exports = {signup};