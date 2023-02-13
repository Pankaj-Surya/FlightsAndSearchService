const express = require('express')

const router = express.Router()

const cityController = require("../../controllers/city-controller")
const flightController = require("../../controllers/flight-controller")
const airportController = require("../../controllers/airport-controller")

// City
router.post('/city',cityController.create)
router.get('/city/:id',cityController.get)
router.delete('/city/:id',cityController.destroy)
router.put('/city/:id',cityController.update)
router.get('/city',cityController.getAll)


// Flight
router.post('/flights',flightController.create)
router.get('/flights',flightController.getAll)


//Airport
router.post('/airports',airportController.create)


module.exports=router