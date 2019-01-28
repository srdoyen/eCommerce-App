var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/swag-shop"); //{ useNewUrlParser: true })


var Product = require('./model/product');
var WishList = require('./model/wishList');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/product', function(request, response) {
    var product = new Product();
    //var product = new Product(request.body);
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedProduct){
        if(err) {
            response.status(500).send({error: "Could not save product"});
        }
        else {
            response.status(200).send(savedProduct);
        }
    });
});


app.listen(3000, function() {
    console.log("Swap Shop API running on port 3000...");
});