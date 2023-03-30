const express = require('express')
const Fichas = require('../model/Fichas')
const router = express.Router()

router.get('/', (req, res) => {
    Fichas.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Fichas.create(req.body)
    .then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Fichas.findOneAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Fichas.findOneAndDelete(req.params.id).exec.then(() => res.sendStatus(204))
})