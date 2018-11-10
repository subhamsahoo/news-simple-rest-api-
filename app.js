var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes");

app.use('/',routes);

//server setup
const port = process.env.PORT || 9000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});