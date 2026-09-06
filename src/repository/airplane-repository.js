const {Airplane} = require('../models/index')

class AirplaneRepository {
    async createAirplane({modelNumber, capacity}) {
        try {
            const airplane = await Airplane.create({
                modelNumber,
                capacity
            });
            return airplane
        } catch (error) {
            console.log("Somthing went wrong in the repository layer")
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            await Airplane.destroy({
                where: {
                    id: airplaneId
                }
            })
            return true
        } catch (error) {
            console.log("Somthing went wrong in the repository layer")
            throw {error};
        }
    }

    async getAirplane(airplaneId) {
        try {
            const airplane = await Airplane.findByPk(airplaneId)
            return airplane
        } catch (error) {
            console.log("Somthing went wrong in the repository layer")
            throw {error};
        }
    }

    async updateAirplane(airplaneId , data) {
        try {
            const airplane = await Airplane.findByPk(airplaneId)

            if (!airplane) {
                return null;
            }

            airplane.modelNumber = data.modelNumber;
            airplane.capacity = data.capacity;
            await airplane.save();

            return airplane
        } catch (error) {
            console.log("Somthing went wrong in the repository layer")
            throw {error};
        }
    }

}

module.exports = AirplaneRepository