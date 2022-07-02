//Simply put, this file will be run first when running on the website link
import express from "express";
import homeController from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/home-page', homeController.getHomePage);
    router.get('/employee/info', homeController.getEmployeePage);
    router.get('/form-sign-in',homeController.getFormSignIn);
    router.post('/post-sign-in',homeController.postSignIn);
    router.get('/get-info',homeController.getInfo);

    //rest api

    return app.use('/', router);
}

module.exports = initWebRoutes;