const { Op } = require("sequelize")
const { Flights } = require("../models/index")


class FlightRepository {

   #createFilter(data) {
      let filter={}
      if(data.arrivalAirportId){
      filter.arrivalAirportId = data.arrivalAirportId
      }

      if(data.departureAirportId){
       filter.departureAirportId=data.departureAirportId
      }

      let priceFilter=[];
      if(data.minPrice){
       //Object.assign(filter, {price: {[Op.gte]: data.minPrice}})
       priceFilter.push({price:{[Op.gte]: data.minPrice}})
      }
      if(data.maxPrice){
        //Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
       priceFilter.push({price:{[Op.lte]:data.maxPrice}})}

      Object.assign(filter, {[Op.and]:priceFilter})
      console.log(filter);
      return filter;
   }

   // to get seat we need airplane model
   async createFlight(data) {
      try {
         const flight = await Flights.create(data)
         return flight;
      } catch (error) {
         console.log("Something went wrong in the repository layer");
         throw { error };
      }
   }


   async getFlight(flightId) {
      try {
         const flight = await Flights.findByPk(flightId);
         return flight;
      } catch (error) {
         console.log("Something went wrong in the repository layer");
         throw { error };
      }
   }

   async getAllFlights(filter) {
      try {
         const filterObject = this.#createFilter(filter)
         const flights = await Flights.findAll({
            where: filterObject
         })
         return flights;
      } catch (error) {
         console.log("Something went wrong in the repository layer");
         throw { error };
      }
   }

}


module.exports = FlightRepository