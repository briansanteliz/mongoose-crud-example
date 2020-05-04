const { Schema, model } = require('mongoose');

//creando el schema para producto.

const lenguaje = new Schema({
    nombre: {
        type: String,
        required: true,
        unique:true
    },
    descripcion: {
        type: String,
        required: true
    }
})

module.exports= model('Lenguaje', lenguaje);