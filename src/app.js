
const config = require("./config");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

const userRoutes = require('./routes/user');


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.use(`/api/${config.apiVerion}`, userRoutes);


module.exports = app;

