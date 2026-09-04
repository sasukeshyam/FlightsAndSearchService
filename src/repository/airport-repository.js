const airport = require('../models/airport');
const { Airport } = require('../models/index')

class AirportRepository{
    async createAirport({name, address, cityId}) {
        try {
            const airport = await Airport.create({
                name,
                address,
                cityId
            });
            return airport
        } catch (error) {
            console.log("Somthing went wrong in the repository layer")
            throw {error};
        }
    }

    async deleteAirport({ airportId }) {
        try {
            await Airport.destroy({
                where: {
                    id: airportId 
                }
            })
            
            return true
        } catch (error) {
            console.log("Somthing went wrong in the repository layer")
            throw {error};
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await Airport.findByPk(airportId)

            if(!airport){
                return null
            }

            airport.name = data.name;
            airport.address = data.address;
            airport.cityId = data.cityId;

            await airport.save();

            return airport
        } catch (error) {
            console.log("Somthing went wrong in the repository layer")
            throw {error};
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport
        } catch (error) {
            console.log("Somthing went wrong in the repository layer")
            throw {error};
        }
    }
}


module.exports = AirportRepository;