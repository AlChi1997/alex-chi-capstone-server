const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT =process.env.PORT || 8080;

console.log(`DB_HOST: ${process.env.DB_HOST}`);
console.log(`DB_USER: ${process.env.DB_USER}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
console.log(`DB_NAME: ${process.env.DB_NAME}`);


app.use(cors());
app.use(express.json());

const signupRoutes = require('./routes/signup-routes');

app.use('/', signupRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});