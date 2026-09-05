
const { CityService } = require('../service/index');


const cityService = new CityService()

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data: city,
            success: true,
            massage: 'Successfully created a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to create the city',
            err: error
        })
    }
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            massage: 'Successfully deleted a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to delete the city',
            err: error
        })
    }
}

// PATCH -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body)
        return res.status(200).json({
            data: response,
            success: true,
            massage: 'Successfully updated a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to update the city',
            err: error
        })
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            massage: 'Successfully fetched the city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to fetched the city',
            err: error
        })
    }
}

//get -> /city
const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data: cities,
            success: true,
            massage: 'Successfully fetched the cities',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to fetched all the city',
            err: error
        })
    }
}

const bulkCity = async (req, res) => {
    try {
        const cityData = req.body;

         // 1. Validation check to ensure an array was provided
        if (!Array.isArray(cityData) || cityData.length === 0){
            return res.status(400).json({
                data: {},
                success: false,
                message: 'Request body must be a non-empty array of items.',
                err: {}
            });
        }

        // 2. Insert records efficiently using bulkCreate
        const cities = await cityService.bulkCreate(cityData)

        return res.status(201).json({
            data: cities,
            success: true,
            message: `${cities.length} bulk city records successfully created!`,
            err: {}
        })
    } catch (error) {
        console.error('Bulk insertion failed:', error);

        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal server error',
            err: error
        });
    }
}

const getAirportOfCity = async (req, res) => {
    try {
        const response = await cityService.getAirportOfCity(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            massage: 'Successfully fetched the all airport of a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            massage: 'not able to fetched the city',
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    bulkCity,
    getAirportOfCity
};