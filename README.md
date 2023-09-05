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

openai.js

This is our openai file which is used to set up a connection to the openai servers in order for our open ai calls to get a response.

knexfile.js

This is our knexfile which connects our server to our mysql database

Routes folder:

This folder contains all the routes in which the server back end uses

Controllers folder:

This folder contains all the controllers for the server back end calls

careersController.js

This file contains the postCareers and getCareers end points, the postCareers input careers into our database using open ai and getCareers sends 10 datapoints back to the client.

educationController.js

This file contains getEducation endpoint which sends education data back to the client.

interestsController.js

This file contains getInterests and updateInterests end points, the getInterests end point sends the interests data back to the client and updateInterests updates and adds interests.

loginController.js

This file contains the login end point which handles the clients login functionality.

profileController.js

This file contains the updateProfile end point which updates user profiles.

signupController.js

This file contains the signup end point which handles the clients signup functionality.

userController.js

This file contains the getUser end point which sends the user data back to the front end.


