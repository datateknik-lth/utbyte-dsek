# utbyte-dsek
Länken till hemsidan: https://datateknik-lth.github.io/utbyte-dsek/  

# Develop
## Python
The following packages are needed in order to run the scripts:

`pip install bson openpyxl`

## Node.js
This project uses Node.js. To run the server and develop, run the following from root directory to install
the requirements in `package.json`:
 
`npm install`

Now run the backend: `nodemon backend/server`. To repopulate the database with unis, specify `-- populate`. 
Shut down the server immediately when the population finished and restart without the flag. 

And then run the frontend:
`npm start`