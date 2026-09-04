const { AirportService } = require('../service/index')

const airportService = new AirportService()

const createAirport = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body)
        return res.status(201).json({
            data: airport,
            success: true,
            massage: 'Successfully created a airport',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to create the Airport',
            err: error
        })
    }
}

const deleteAirport = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            massage: 'Successfully deleted the airport',
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to delete the airport',
            err: error
        })
    }
}

const updateAirport = async (req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body)
        return res.status(201).json({
            data: response,
            success: true,
            massage: 'Successfully updated the airport',
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to update the airport',
            err: error
        })
    }
}

const getAirport = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            massage: 'Successfully fetched the airport',
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to fatched the airport',
            err: error
        })
    }
}

module.exports = {
    createAirport,
    deleteAirport,
    updateAirport,
    getAirport
}