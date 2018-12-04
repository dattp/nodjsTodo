var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose = require("mongoose");

var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");

var app = express();
var port = process.env.PORT || 3000;

//config
app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.set("view engine", "ejs");
//
//connect db
console.log(config.getDbCnString());
mongoose.connect(config.getDbCnString());
//
setupController(app);
todoController(app);
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("Listening on port: " + port);
});