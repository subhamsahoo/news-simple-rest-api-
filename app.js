var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var routes = require("./routes/routes");

app.use('/',routes);

//server setup
const port = process.env.PORT || 9000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});