const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MedicalDB', (err) => {
    if (!err) 
        console.log('MongoDB connected');
        else
        console.log('Connection to mongodb failed: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

