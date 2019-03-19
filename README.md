# utbyte-dsek
Länken till hemsidan: https://datateknik-lth.github.io/utbyte-dsek/  

# Develop
## Python
The following packages are needed in order to run the scripts:

`pip install bson openpyxl`

## Node.js
### Environment variables
To be able to run the backend, a file called `.env` need to be created in the project root. This file should **not** be commited.
The file should have the following structure: 
```
DATABASE=mongodb://<ip-to-backend>
DB_NAME=<name-of-mongodb-database>
DB_PORT=27017 
```

### Dependencies
This project uses Node.js. To run the server and develop, run the following from root directory to install
the requirements in `package.json`:
 
`npm install`

Now run the backend: `nodemon backend/server`. To repopulate the database with unis, specify `-- populate`. 
Shut down the server immediately when the population finished and restart without the flag. 

And then run the frontend:
`npm start`