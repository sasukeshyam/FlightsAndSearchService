const { CityRepository } = require('../repository/index')


class CityService {
    constructor() {
        this.CityRepository = new CityRepository();
    }
    async createCity(data) {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log('Something went wrong in city service')
            throw {error}
        }
    }
    async deleteCity(cityID) {
        try {
            const response = await this.CityRepository.deleteCity(cityID);
            return response;
        } catch (error) {
            console.log('Something went wrong in city service')
            throw {error}
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log('Something went wrong in city service')
            throw {error}
        }
    }
    async getCity(cityId) {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log('Something went wrong in city service')
            throw {error}
        }
    }
} 
