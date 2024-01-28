const express = require('express');

// const { ServerConfig, Logger } = require('./config');   // NOTE :- Without destructuring , error
const { ServerConfig } = require('./config');

const apiRoutes = require('./routes');
const  CRON = require('./utils/common/cron-job')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);
// app.use('/bookingService/api', apiRoutes);



app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server with PORT: ${ServerConfig.PORT}`);
    CRON();
    // Logger.info("Successfully started the server");
});