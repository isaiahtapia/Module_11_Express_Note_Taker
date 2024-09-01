//Imports (packages and api routes)
const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

//Using express to create this application
const app = express();

const view_routes = require('./routes/view_routes');
const api_routes = require('./routes/api_routes');

//Creates the Port where our local server runs
PORT = 3001;

//Middleware 
app.use(express.json());
app.use(express.static('./public'));

//Routes
app.use('/', view_routes);`  `
app.use('/api', api_routes);

app.listen(PORT, () => {
    console.log('Your express server started on', PORT);
})