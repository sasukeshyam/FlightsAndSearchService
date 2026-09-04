const express = require("express");
const bodyParser = require("body-parser");


const { PORT } = require("./config/serverConfig.js");
const ApiRoutes = require('./routes/index.js')

const db = require('./models/index.js')

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server started in PORT ${PORT}`);

        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true})
        }
    });

}

setupAndStartServer()