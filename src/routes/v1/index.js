const express = require('express')

const CityController = require('../../controller/city-controller');
const AirportController = require('../../controller/airport-controller');

const router = express.Router()

// city routes
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.post('/city/bulk', CityController.bulkCity);

// airport routes
router.post('/airport', AirportController.createAirport);
router.delete('/airport/:id', AirportController.deleteAirport);
router.patch('/airport/:id', AirportController.updateAirport);
router.get('/airport/:id', AirportController.getAirport);

module.exports = router;