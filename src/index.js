const express = require('express')
const {PORT} = require('./config/serverConfig')

const setupAndStartServer = async ()=>{

    //console.log(process.env)
    const app = express();
    //const PORT = process.env.PORT;
    app.listen(PORT,()=>{
        console.log(`Server start at ${PORT}`);
    });
}

setupAndStartServer()