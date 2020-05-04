require('../connection')
const Lenguaje = require('../models/lenguajes')

//forma manual de actualizar un documento.

// const findAndUpdate = async()=>{
//    try{
//     const findUser =  await Lenguaje.findOne({nombre:'flutter'})
//     findUser.descripcion = 'quiero aprender a dessarrollar apps moviles';
//      const update = await findUser.save();
//      return update
//    }catch(e){
//        throw new Error(e)
//    }
// }
// findAndUpdate()
//     .then(update=>console.log(update))
//     .catch(e=>console.log(e))

//usando el metodo .findAndUpdate()
const findAndUpdate = async()=>{
   const updateLenguaje = await  Lenguaje.findOneAndUpdate({nombre:'flutter'},
    {descripcion:'actualiado desde find and update'});
    return updateLenguaje
}
findAndUpdate()


//usando el metodo .update()

// const updateLenguaje = async()=>{
//   try{
//     const update = await Lenguaje.update({nombre:'flutter'},
//     {descripcion:'quiero aprender este lenguaje'})
//     return update
// }catch(e){
//     throw new Error(e)
// }
//   }
// updateLenguaje()
//     .then(update=>console.log(update))
//     .catch(e=>console.log(e))