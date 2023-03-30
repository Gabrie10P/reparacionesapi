const express = require('express')
const Fichas = require('../model/Fichas')
const router = express.Router()

const Ficha = {
    get: async (req, res) =>{
        const {id} = req.params
        const ficha = await Fichas.findOne({_id: id})
        res.status(200).send(ficha)
    },
    list: async (req, res) =>{
        const ficha = await Fichas.find()
        res.status(200).send(ficha)
    },
    create: async (req, res) =>{
        console.log(req.body)
        const ficha = new Fichas(req.body)
        const savedFicha = await ficha.save()
        res.status(201).send(savedFicha._id)
    },
    update: async (req, res) =>{
        const {id} = req.params
        const ficha = await Fichas.findOne({_id: id})
        console.log(ficha)
        Object.assign(ficha, req.body)
        await ficha.save()
        res.sendStatus(204)
    },
    destroy: async (req, res) => {
        const {id} = req.params
        const ficha = await Fichas.findOne({_id: id})
        if(ficha){
            await ficha.deleteOne()
        }
        res.sendStatus(204)
    }
}

module.exports = Ficha