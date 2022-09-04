const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');
var patientsController = require('./controllers/patientscontroller.js');

var app = express();
app.use(bodyParser.json());
app.listen(3000, () => console.log('listening on port 3000'));

app.use('/patients', patientsController);