const {Flights} = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter = {}

        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId
        }
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId
        }
        // if(data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             {price: {[Op.lte]: data.maxPrice}},
        //             {price: {[Op.gte]: data.minPrice}}
        //         ]
        //     });
        // }
        let priceFilter = [];

        if(data.minPrice) {
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            priceFilter.push({price: {[Op.gte]: data.minPrice}})
        }
        if(data.maxPrice){
            // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
            priceFilter.push({price: {[Op.lte]: data.maxPrice}})
        }
        Object.assign(filter, {[Op.and]: priceFilter});
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight
        } catch (error) {
            console.log("Something went wrong in he repository layer");
            throw {error};
        }
    }

    async deleteFlight(flightId) {
        try {
            const response = await Flights.destroy({
                where: {
                    id: flightId
                }
            })
            return response
        } catch (error) {
            console.log("Something went wrong in he repository layer");
            throw {error};
        }
    }

    async updateFlight(flightId, data) {
        try {
            const flight = await Flights.findByPk(flightId)

            if(!flight) {
                return null
            }

            flight.flightNumber = data.flightNumber
            flight.airplaneId = data.airplaneId
            flight.departureAirportId = data.departureAirportId
            flight.arrivalAirportId = data.arrivalAirportId
            flight.arrivalTime = data.arrivalTime
            flight.departureTime = data.departureTime
            flight.price = data.price
            flight.totalSeats = data.totalSeats

            await flight.save()
            return flight
        } catch (error) {
            console.log("Something went wrong in he repository layer");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId)
            return flight
        } catch (error) {
            console.log("Something went wrong in flight repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const flightObject = this.#createFilter(filter); 
            const flight = await Flights.findAll({
                where: flightObject
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight repository layer", error);
            throw error;
        }
    }
}

module.exports = FlightRepository;



/**
 * {
    * flightNumber
    * airplaneId
    * departureAirportId
    * arrivalAirportId
    * arrivalTime
    * departureTime
    * price
    * totalSeats -> airplane
 * }
 */