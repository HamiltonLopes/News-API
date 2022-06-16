import express from 'express';
import Routes from './router.js';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from "./swagger.js";

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }
    
    middlewares(){
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: false }));
        this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    }

    routes(){
        this.server.use(`/${process.env.API_NAME}/${process.env.API_VERSION}`,Routes);
    }
} 

export default new App().server;


