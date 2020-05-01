const { Schema, model } = require('mongoose');

//creando el schema para producto.

const schema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        default:0
    }
})

module.exports= model('Producto', schema);