const {FlightService} = require('../service/index')


const flightService = new FlightService();

const createFlight = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber = req.body.flightNumber,
            airplaneId = req.body.airplaneId,
            departureAirportId = req.body.departureAirportId,
            arrivalAirportId = req.body.arrivalAirportId,
            arrivalTime = req.body.arrivalTime,
            departureTime = req.body.departureTime,
            price = req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create the flight',
            err: error
        })
    }
}

const deleteFlight = async (req, res) => {
    try {
        const response = await flightService.deleteFlight(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully deleted a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to delete the flight',
            err: error
        })
    }
}

const updateFlight = async (req, res) => {
    try {
        const flight = await flightService.updateFlight(req.params.id, req.body)
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully updated a flight',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to update the flight',
            err: error
        })
    }
}

const getFlight = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id)
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully fetched a flight',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to fetched the flight',
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const flight = await flightService.getAllFlightData(req.query)
        return res.status(200).json({
            data: flight,
            success: true,
            message: 'Successfully fetched all the flights',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to fetched all the flights',
            err: error
        })
    }
}



module.exports = {
    createFlight,
    updateFlight,
    deleteFlight,
    getFlight,
    getAll
}