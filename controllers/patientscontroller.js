const { Router } = require('express');
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Patients} = require('../models/patients');

router.get('/', (req, res) => {
    Patients.find((err, docs) => {
        if (!err) {res.send(docs);}
        else {console.log('Retriving Patients Error :' + JSON.stringify(err, undefined, 2));}
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(re.params.id))
    return res.status(400).send('Invalid ID : ${req.params.id}');

    Patients.findById(re.params.id, (err, doc) => {
        if (!err) {res.send(doc);}
        else {console.log('Retriving Patients Error :' + JSON.stringify(err, undefined, 2));}
    })
});

router.post('/', (req, res) => {
    var newPatient = new Patients({
        name: req.body.name,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        diagnosis: req.body.diagnosis,
    });
    newPatient.save((err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Patient Save Failed :' + JSON.stringify(err, undefined, 2));}
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('Invalid ID : ${req.params.id}');

    var newPatient = {
        name: req.body.name,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        diagnosis: req.body.diagnosis,
    };
    Patients.findByIdAndUpdate(req.params.id, { $set: newPatient},{new: true}, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Patient Update Failed :' + JSON.stringify(err, undefined, 2));}
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('Invalid ID : ${req.params.id}');
    
    Patients.findByIdAndRemove(req.params.id, (err, doc) =>{
        if (!err) { res.send(doc); }
        else {console.log('Patient Delete Failed :' + JSON.stringify(err, undefined, 2));}
    });
});

module.exports = router;