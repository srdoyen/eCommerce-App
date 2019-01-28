var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/swag-shop"); //{ useNewUrlParser: true })


var Product = require('./model/product');
var WishList = require('./model/wishList');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(3000, function() {
    console.log("Swap Shop API running on port 3000...");
});