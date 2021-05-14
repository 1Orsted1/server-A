
const config = require("./config");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

///////////////////
//const router = express.Router();

const userRoutes = require('./routes/user');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
// app.use(`/api/${config.apiVerion}`, router);

app.use(`/api/${config.apiVerion}`, userRoutes);

// router.use((request, response, next) => {
//   console.log("este es el middleware");
//   next();
// });

// router.route("/orders").get((request, response) => {
//   dboperations.getOrders().then((result) => {
//     response.json(result);
//   });
// });

// router.route("/orders").post((request, response) => {
//     let order = {...request.body}
//     dboperations.setData(order).then((result) => {
//     response.status(201).json(result);
//   });
// });





module.exports = app;

