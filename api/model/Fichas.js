const mongoose = require('mongoose')

const Fichas = mongoose.model('Fichas', {
    nombre: { type: String, required : true, minLength: 5 },
    direccion:{ type: String, required : true, minLength: 5 },
    telefono:{ type: String, required : true, minLength: 5 },
    equipo:{ type: String, required : true, minLength: 5 },
    marca:{ type: String, required : true, minLength: 5 },
    modelo:{ type: String, required : true, minLength: 5 },
    problema:{ type: String, required : true, minLength: 5 },
    estado:{ type: String, required : true, minLength: 5 },
})

module.exports = Fichas