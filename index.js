const express = require('express')
const mongoose = require('mongoose')
const fichas = require('./api/routes/fichas')
const port = 3011

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.use('/api/fichas', fichas)

app.listen(port, () =>{
    console.log('arrancando aplicacion')
})