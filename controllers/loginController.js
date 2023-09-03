const knex = require('knex')(require('../knexfile'));

const login =(_req,res)=>{
    const {username,password} = _req.body;
    knex('users')
        .where({
            username: username,
            password: password
        })
    .first()
    .then((user)=>{
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        if(user.password === password){
            res.json({
                message:'Login successful',
                id: user.id});
        }
        else{
            res.status(401).json({message:'Login failed'});
        }
    }).catch((err)=>{
        console.error(err);
        res.status(500).json({message:'An error occured during login'});
    });
}

module.exports = {login};