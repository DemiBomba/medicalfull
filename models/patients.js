const mongoose = require('mongoose');

var Patients = mongoose.model('Patients',{
    name: {type: String},
    gender: {type: String},
    birthDate: {type: Date},
    diagnosis: {type: String},
});

module.exports = { Patients } ;