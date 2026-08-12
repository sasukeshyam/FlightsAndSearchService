const express = require("express");

const { PORT } = require("./config/serverConfig.js");

const setupAndStartServer = async () => {

    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started in PORT ${PORT}`);
    })


}

setupAndStartServer()