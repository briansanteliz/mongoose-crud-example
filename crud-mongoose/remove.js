require("../connection");
const Users = require("../models/Users");


const remove = async()=>{
    await Users.remove();
    
    
}
remove()    
    // .then(eliminar=>console.log('eliminado'))
    // .catch(er=>console.log('error'+er))
