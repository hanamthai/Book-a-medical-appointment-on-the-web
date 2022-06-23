//Simply put, this file will be run first when running on the website link
import express from "express";
import homeController from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/home-page', homeController.getHomePage);
    router.get('/employee/info', homeController.getEmployeePage);

    //rest api

    return app.use('/', router);
}

module.exports = initWebRoutes;