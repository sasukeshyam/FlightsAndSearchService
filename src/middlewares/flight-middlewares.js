const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        // if any of this parameters are not present it will come inside the if
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Invalide request body for creating flight',
            err: 'Missing mandatoty properties to create a flight' 
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}