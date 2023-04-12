const express = require('express')
const mongoose = require('mongoose')
const fichas = require('./api/routes/fichas')

const app = express()

app.use(express.json())
app.set('port',process.env.PORT | 3022)

mongoose.connect('mongodb+srv://gabrielpenate8:Ay87unjInmlQyfVJ@reparaciones.kh0murh.mongodb.net/?retryWrites=true&w=majority')

app.get('/', fichas.list)
app.get('/:id', fichas.get)
app.post('/', fichas.create)
app.put('/:id', fichas.update)
app.delete('/:id', fichas.destroy)

app.listen(app.get('port'), () =>{
    console.log("Arrancando api");
})