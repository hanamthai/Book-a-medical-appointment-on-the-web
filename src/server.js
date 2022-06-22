import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web"
require('dotenv').config(); // to useable process.env.port

let app = express();

// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 9090;
// if port in env undefine => port=9090

app.listen(port,() => {
    //callback
    console.log("running port:" + port)
})
