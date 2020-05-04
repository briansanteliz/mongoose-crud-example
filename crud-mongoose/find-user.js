require('../connection')
const User = require('../models/Users')

//buscando los usarios
const find = async()=>{
    const query = await User.find({password:'contrasdeña'})
    return query
}
find()
    .then(query=>console.log(query))
    .catch(e=>console.log(e))