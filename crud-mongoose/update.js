require("../connection");
const Users = require("../models/Users");

const update = async ()=>{
      return await  Users.update({nombre:'maria'},{
    password:'contrasdeña'
    });
  
}

update()
    .then(Users=>console.log(Users))
    .catch(e=>console.log(e))
