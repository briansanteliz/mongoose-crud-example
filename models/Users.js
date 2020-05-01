const {Schema, model} = require('mongoose');

const userSchema = new Schema({

    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:String,
        required:true
    },
    password:String,
    nickname:{
        type:String,
        unique:true //unico apodo.
    },
    date:{
        type:Date,
        default: new Date()
    }

})


module.exports= model('Usuarios', userSchema)