const { AirplaneRepository } = require('../repository/index');

class AirplaneService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
    }

    async createAirplane({modelNumber, capacity}) {
        try {
            const airplane = await this.airplaneRepository.createAirplane({
                modelNumber, 
                capacity
            })
            return airplane
        } catch (error) {
            console.log("Somthing went wrong in the Service layer")
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            const response = await this.airplaneRepository.deleteAirplane(airplaneId)
            return response
        } catch (error) {
            console.log("Somthing went wrong in the Service layer")
            throw {error};
        }
    }

    async getAirplane(airplaneId) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(airplaneId)
            return airplane
        } catch (error) {
            console.log("Somthing went wrong in the Service layer")
            throw {error};
        }
    }

    async updateAirplane(airplaneId , data) {
        try {
            const airplane = await this.airplaneRepository.updateAirplane(airplaneId , data);
            return airplane
        } catch (error) {
            console.log("Somthing went wrong in the Service layer")
            throw {error};
        }        
    }
}

module.exports = AirplaneService