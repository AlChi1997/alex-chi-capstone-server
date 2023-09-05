const openai = require('../openai');

const getCareers =async (req, res) => {
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
        res.json({generatedMessage});
    } else {
        res.status(500).json({message:'An error occured during careers retrieval'});
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'An error occured during careers retrieval'});
    };
    }

module.exports = {getCareers};