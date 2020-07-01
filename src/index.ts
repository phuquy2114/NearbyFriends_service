import "reflect-metadata";
import {createConnection} from "typeorm";
import './env';
import app from '@server';
import logger from "@shared/Logger";

createConnection().then(async connection => {
    console.log("Connected DB")
    //run server node

    const port = Number(process.env.PORT || 3000);
    app.listen(port, () => {
        logger.info('Express server started on port: ' + port);
    });
    })
    .catch(error => console.log("ConnectionDB Error:",error));
