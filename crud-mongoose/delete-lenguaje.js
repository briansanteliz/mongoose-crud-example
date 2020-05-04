require("../connection");
const Lenguaje = require("../models/lenguajes");

//usando el metodo .remove()

// const Delete = async()=>{
//    const remove=  await Lenguaje.remove({nombre:'flutter'})
//    return remove
// }

// Delete()

//usando el metodo findOneAndDelete()

//  const findAndDelete = async()=>{
//      const eliminado = await Lenguaje.findOneAndDelete({nombre:'Javascript'});
//      return eliminado
//  }
//  findAndDelete()
//      .then(eliminado=>console.log(eliminado))
//      .catch(e=>console.log(e))

//buscando el lenguaje y eliminando manuealmente.
// const deleteAndFind = async () => {
//   const lenguaje = await Lenguaje.findOne({ nombre: "flutter" });
//   const eliminado = await lenguaje.remove();
//   return eliminado

// };
// deleteAndFind() 
//     .then(eliminado=>console.log(eliminado))
//     .catch(e=>console.log(e))

//usando el metodo .deleteMany()

 const deleteMany = async()=>{
    //eliminando varios documentos.
    // const eliminado=await Lenguaje.deleteMany({descripcion:'me gusta para apliaciones web'});

    //eliminando un documento.
    //  const eliminado = await Lenguaje.deleteOne({descripcion:'me gusta para aplicaciones web'});
    //  return eliminado 

    //eliminando por id.
    id='5eb029d10210fd2836254af0'
    const eliminado = await Lenguaje.findByIdAndDelete(id)
    return eliminado
 }
 deleteMany()
     .then(eliminado=>console.log(eliminado))
     .catch(e=>console.log(e))