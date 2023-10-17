const express = require('express')
const router = express.Router()
const multer = require('multer');

// !!!!!!!!!!!! importing all controllers 

const { handleVehicleTrackingList, handleGetAllVehiclelist, handleEditStatus,handleVehicleUpdate } = require('../controllers/vehicleTrackingController')


const {handleSignUp, handleLogin} = require('../controllers/signLoginController')

const {handleGetPacketData} = require('../controllers/packetController')

// !!!!!!!!!! multer configuration !!!!!!!!!

const storage = multer.diskStorage({
  destination: function(req,file,cb){
      return cb(null,"./upload")
  },
  filename: function(req,file,cb){
      return cb(null,`${Date.now()}-${file.originalname}`)
  },
})


const upload = multer({storage})


// !!!!!!!!!!!!!!!!  importing signup contollers   !!!!!!!!!!!!!!!!!!!

router.post('/signup',handleSignUp)
router.post('/login',handleLogin)

// !!!!!!!!!!!!!!!!  importing vehicleTacking contollers   !!!!!!!!!!!!!!!!!!!

router.post('/vehicalTrackingList',upload.single('customIcon'),handleVehicleTrackingList)
router.get('/getAllVehicleList',handleGetAllVehiclelist)
router.put('/editStatus/:id',handleEditStatus);
router.put('/editVehicleList/:id',handleVehicleUpdate)


// !!!!!!!!!!!!!!!!!!!! importing packet controllers !!!!!!!!!!!!!!!!!!

router.get('/getPacketData',handleGetPacketData)




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



module.exports = router