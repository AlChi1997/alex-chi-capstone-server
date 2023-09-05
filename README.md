# alex-chi-capstone-server
##Getting started
Before running the server, you would first need install your npm dependecies with npm i
After installing your dependecies, you will now need to create a local .env file on your local repository in the following format:

PORT=<portNumber>
DB_HOST=<DB Hosting ip>

DB_NAME=<DB name>

DB_USER=<MySQL2 username>

DB_PASSWORD=<MYSQL2 password>

OPENAI_API_KEY=<OpenAI API KEY>

With these set up, you will now be able to migrate and seed our initial data using
knex migrate:latest
knex seed:run

Now with all that set, you will now be able to run the server using node server.js

How the server works:

It has a server.js file which will be our main file we run, a knex file to talk to our mysql2 databases, a route folder containing different api call routes sorted by category and a controller folde
which contain all our api calls our front end is making to the server
