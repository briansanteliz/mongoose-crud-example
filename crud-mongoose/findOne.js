//requiriendo el modelo y la conexión.
require("../connection");
const user = require("../models/Users");

//listando un producto
const getUser = async () => {
  const query = await user.findOne({apodo:'alejandra'});
  console.log(query);
};

const Main = getUser();
Main;
