
// !!!!!!!!! importing model !!!!!!!!!

const vehicalTrackingList = require('../models/vehicalTracinglist')


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// handle vehicle tracking list 

async function handleVehicleTrackingList(req, res) {
  try {
    const { plateNumber, vehicleType, mobileNumber, trackerModel, trackerNumber } = req.body;
    const { filename } = req.file;
    const status = true;

    const existingPlate = await vehicalTrackingList.findOne({ where: { plateNumber } });

    if (existingPlate) {
     return  res.status(400).json({ message: 'Plate number is already present' });
    }

    const existingMobile = await vehicalTrackingList.findOne({ where: { mobileNumber } });

    if (existingMobile) {
     return res.status(400).json({ message: 'Mobile number is already present ' });
    }

    const existingTrackerNumber = await vehicalTrackingList.findOne({
      where :{trackerNumber}
    })

    if(existingTrackerNumber){
     return res.status(400).json({message : "Tracker number is already present"})
    }

    // If plateNumber and mobileNumber are unique, create a new record
    const data = await vehicalTrackingList.create({
      plateNumber,
      trackerModel,
      mobileNumber,
      vehicleType,
      trackerNumber,
      filename,
      status
    });

    res.status(201).json({ message: 'Tracking list created', data });
    console.log('Tracking list created');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred creating tracking list.' });
  }
}




// handle get all vehicle list 


async function handleGetAllVehiclelist(req, res) {
  try {
    const data = await vehicalTrackingList.findAll()

    res.status(200).json({ message: 'Get all data successfully', data })
    console.log('Get all data successfully')
  } catch (error) {
    console.log(`error : ${error}`)
    res.status(404).json(`An error occurred creating tracking list : ${error}`)
  }
}



// handle status edit 


async function handleEditStatus(req, res) {
  const userId = req.params.id;

  try {
    const vehicalTracking = await vehicalTrackingList.findByPk(userId);

    if (!vehicalTracking) {
      return res.status(404).json({ message: "Vehicle is not present" });
    }

    // Get the current status from the database
    const currentStatus = vehicalTracking.status;

    // Toggle the status: If it's true, set it to false; if it's false, set it to true
    vehicalTracking.status = !currentStatus;

    // Save the updated record to the database
    await vehicalTracking.save();

    return res.status(200).json({ message: `Status is toggled to ${vehicalTracking.status}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred during status toggle" });
  }
}



// handle vehicle list update

async function handleVehicleUpdate(req,res){
    try{
      const vehicelID = req.params.id
       const { plateNumber, vehicleType, mobileNumber, trackerModel, trackerNumber } = req.body;
   

     const vehiclePresent = await vehicalTrackingList.findByPk(vehicelID)
     
     if(!vehiclePresent){
      res.status(400).json({message : "vehicle is not present"})
     }
  
     const updateVehicleList = await vehicalTrackingList.update(
      {plateNumber, vehicleType, mobileNumber, trackerModel, trackerNumber},
      {where :{id : vehicelID }}
     )
     

     res.status(200).json({message : "vehicle list is updated", updateVehicleList})
     console.log("vehicle list updated")
    }catch(error){
     console.log(`error  :  ${error}`)
     res.status(400).json({error : "An error occured during updating vehivle List",error})
    }
}



// exporting all controllers 


module.exports = {
  handleVehicleTrackingList,
  handleGetAllVehiclelist,
  handleEditStatus,
  handleVehicleUpdate

}