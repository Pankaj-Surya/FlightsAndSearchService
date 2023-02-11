const express = require('express')
const {PORT} = require('./config/serverConfig')
const bodyParser = require("body-parser");
const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async ()=>{
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    app.listen(PORT,async ()=>{
        console.log(`Server start at ${PORT}`);
        // const repo = new CityRepository()
        // await repo.createCity({name:"Mumbai"})
    });
}

setupAndStartServer()