const express = require('express')

const CityController = require('../../controller/city-controller');
const AirportController = require('../../controller/airport-controller');
const AirplaneController = require('../../controller/airplane-controller');
const FlightController = require('../../controller/flight-controller');

const router = express.Router()

// city routes
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.post('/city/bulk', CityController.bulkCity);
router.post('/city/airport/:id', CityController.getAirportOfCity);

// airport routes
router.post('/airport', AirportController.createAirport);
router.delete('/airport/:id', AirportController.deleteAirport);
router.patch('/airport/:id', AirportController.updateAirport);
router.get('/airport/:id', AirportController.getAirport);

//airplane routes
router.post('/airplane', AirplaneController.createAirplane);
router.delete('/airplane/:id', AirplaneController.deleteAirplane);
router.patch('/airplane/:id', AirplaneController.updateAirplane);
router.get('/airplane/:id', AirplaneController.getAirplane);

// flight routes
router.post('/flights', FlightController.createFlight);
router.delete('/flights/:id', FlightController.deleteFlight);
router.patch('/flights/:id', FlightController.getFlight);
router.get('/flights/:id', FlightController.getFlight);
router.get('/flights', FlightController.getAll);

module.exports = router;