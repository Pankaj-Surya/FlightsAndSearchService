const {AirplaneRepository,FlightRepository} = require('../repository/index')
const {compareTime} = require('../utils/helper')

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
          try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
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