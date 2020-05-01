const mongoose = require('mongoose');

    
const uri = 'mongodb://localhost/mywebstore';
const db = mongoose.connection;


mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    .catch(erro=>console.log(erro));

db.once('open', _=>{
    console.log('db conectada', uri)
})

db.on('error', err=>{
    console.log(err)
})
    