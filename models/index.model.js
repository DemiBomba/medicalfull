const mongoose = require('mongoose')
const Schema = mongoose.Schema
newSchema = new Schema({
    name: {type: String},
    gender: {type: String},
    age: {type: Number},
    diagnosis: {type: String},
})

module.exports = mongoose.model('Client', newSchema)