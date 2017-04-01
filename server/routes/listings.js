var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var ListingsSchema = mongoose.Schema({
rent : Number,
sqFt: Number,
city: String,
});

var Listings = mongoose.model("Listings", ListingsSchema);

router.get("/", function(req,res){
  //Get all listings
  Listings.find(function(err, allListings){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allListings);
  });
});

module.exports = router;