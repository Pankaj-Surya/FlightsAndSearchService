const {AirplaneRepository,FlightRepository} = require('../repository/index')


class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
          try {
            console.log("id : ",data.airplaneId)
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log("serv :",airplane)
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity})
            return flight;  
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error}
          }
    }
}

module.exports = FlightService


/**
 * {
 *   flightNumber,
 *  airplaneId ,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 * }
 */