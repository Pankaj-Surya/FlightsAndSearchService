const express = require('express')
const {PORT} = require('./config/serverConfig')
const bodyParser = require("body-parser");
const CityRepository = require('./repository/city-repository')

const ApiRoutes = require('./routes/index')

const {Airport,City} = require('../src/models/index')
const db = require("../src/models/index") 
const setupAndStartServer = async ()=>{
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/api", ApiRoutes)
    app.listen(PORT,async ()=>{
        console.log(`Server start at ${PORT}`);
        
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true})
        }

        const city = await City.findOne({where:{
            id:3,
        }})
        const ap =await city.getAirports()
        //const ap = await City.findByPk(3).getAirports();
        console.log(ap)
    });
}

setupAndStartServer()