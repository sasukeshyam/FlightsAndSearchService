const {AirplaneService} = require('../service/index');

const airplaneService = new AirplaneService();

const createAirplane = async (req, res) => {
    try {
        const airplane = await airplaneService.createAirplane(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: "Successfully created a Aiplane",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create the Airplane',
            err: error
        })
    }
}

const deleteAirplane = async (req,res) => {
    try {
        const response = await airplaneService.deleteAirplane(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully deleted the airplane',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to delete the Airplane',
            err: error
        })
    }
}

const getAirplane = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.params.id);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: 'Successfully fatched the airplane',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to fatched the Airplane',
            err: error
        })
    }
}

const updateAirplane = async (req, res) => {
    try {
        const airplane = await airplaneService.updateAirplane(req.params.id, req.body)
        return res.status(201).json({
            data: airplane,
            success: true,
            message: 'Successfully updated the airplane',
            err: {}
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to update the Airplane',
            err: error
        })
    }
}
    

module.exports = {
    createAirplane,
    deleteAirplane,
    getAirplane,
    updateAirplane
}
