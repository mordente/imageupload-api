import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';


import uploadRoutes from './routes/uploadRoutes.js';

/**
* Database SETUP
*
**/
mongoose.connect(process.env.DATABASE_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true });


class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', uploadRoutes);
    }
}






export default new App().app;