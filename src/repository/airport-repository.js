const CrudRespository = require('./crud-repository');
const { Airport } = require('../models/index');
// console.log("crudrepo imp from airport repo",CrudRespository)
// console.log("Airport repo",Airport)

class AirportRespository extends CrudRespository {
    constructor() {
        super(Airport);
    }
}

module.exports= AirportRespository