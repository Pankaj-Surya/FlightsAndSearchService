const express = require('express')

const router = express.Router()

const cityController = require("../../controllers/city-controller")
const flightController = require("../../controllers/flight-controller")
const airportController = require("../../controllers/airport-controller")
const {FlightMiddlewares} = require("../../middlewares/index")
// City
router.post('/city',cityController.create)
router.get('/city/:id',cityController.get)
router.delete('/city/:id',cityController.destroy)
router.put('/city/:id',cityController.update)
router.get('/city',cityController.getAll)


// Flight
router.post('/flights',FlightMiddlewares.validateCreateFlight,flightController.create)
router.get('/flights',flightController.getAll)
router.get('/flights/:id',flightController.get)
router.put('/flights/:id',flightController.update)
//Airport
router.post('/airports',airportController.create)


module.exports=router