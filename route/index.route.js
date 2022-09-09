const express = require('express')
const Client = require('../models/index.model')
const router = express.Router()

router.get('/', (req, res) => {
    Client.find({}, (err, clients) => {
        res.json(clients)
    })
})

router.post('/', (req, res) => {
    client = new Client({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        diagnosis: req.body.diagnosis,
    })
    client.save(()=> {
        res.json()
    })
})

router.put('/:id',async(req, res) => {
    client = await Client.findById(req.params.id)
    client.name = req.body.name;
    client.gender = req.body.gender;
    client.age = req.body.age;
    client.diagnosis = req.body.diagnosis;
    client.save(()=> {
        res.json(client)
    });
});

router.delete('/:id', (req, res) =>{
    Client.findByIdAndDelete(req.params.id, (err, doc) => {
        res.json({'message':'Deleted'})
    })
})

model.exports = router