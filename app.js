
/**
 * app.js
 * Entry point file for scc-asgn-api application
 * Prog3
 * Brandi Hennis
 * COMP 2150 Web services
 */
 
let express = require('express');
let app = express();
const asgnRouter = require('./asgn-router.js');
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

//set up mongoose and body parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//connect to mongoose
mongoose.connect("mongodb://localhost/assignment", { useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting to the DB.");
} else {
    console.log("DB connected successfully!");
}

var port = 8080;

app.use("/api", asgnRouter);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.info("Running scc-asgn-api on port " + port);
})