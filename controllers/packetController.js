
// importing model 
const packetModel = require('../models/packet')

// handle get packet data 

async function handleGetPacketData(req,res){
  try{
   const data = await packetModel.findAll({
    limit : 5
   })
   res.status(200).json({message :"All packet data get succesfully",data})
   console.log("All packet data get succesfully")
  }catch(error){
  console.log(`error : ${error}`)         
  res.status(400).json(`error : ${error}`)
  }
}



// !!!!!!!! export all controllers !!!!!!!!!!!!!!!!!!!!!!!!!!!



module.exports = {
  handleGetPacketData
}