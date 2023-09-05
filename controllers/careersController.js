const knex = require('knex')(require('../knexfile'));
const openai = require('../openai');

const postCareers =async (req, res) => {
    try{
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role:'system',
                    content:"You are a helpful assistant that provides careers suggestions based on education and interests."
                },
                {
                    role:'user',
                    content:req.body.message
                },
            ],
        });

        if (response && response.choices && response.choices.length > 0) {
            const generatedMessage = JSON.parse(response.choices[0].message.content);
            res.json({message:"Careers retrieved successfully"});

            const careersData = generatedMessage.map((key) => ({
                Career_Title: key.career,
                Description: key.description,
                user_id: req.params.id,
              }));

            knex('careers').insert(careersData).then(() => {
                console.log('Careers data inserted');
            }).catch((err) => {
                console.error(err);
            });
    } else {
        res.status(500).json({message:'An error occured during careers retrieval'});
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'An error occured during careers retrieval'});
    };
};

const getCareers = async(_req,res)=>{
    try{
        const {id} = _req.params;
        const careers = await knex('careers')
            .where({user_id:id})
            .limit(10)
            .debug(true);
        res.json(careers);
        console.log(careers);
    } catch(err){
        console.error(err);
        res.status(500).json({message:'An error occured during careers retrieval'});
    };
};

module.exports = {
    postCareers,
    getCareers
};