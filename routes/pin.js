var express = require('express');
var router =express.Router();
var mongojs=require('mongojs');
var db = mongojs('mongodb://user:pw1@ds023213.mlab.com:23213/lock_controlapp',['pin']);


// Get All Logs
router.get('/pin', function(req, res, next){
    db.pin.find(function(err, pin){
        if(err){
           res.send(err); 
        } else {
            res.json(pin);
        }
    });
});


module.exports=router;