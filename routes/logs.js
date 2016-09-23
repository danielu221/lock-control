var express = require('express');
var router =express.Router();
var mongojs=require('mongojs');
var db = mongojs('mongodb://user:pw1@ds023213.mlab.com:23213/lock_controlapp',['logs']);


// Get All Logs
router.get('/logs', function(req, res, next){
    db.logs.find(function(err, logs){
        if(err){
           res.send(err); 
        } else {
            res.json(logs);
        }
    });
});

// Get Single Log
router.get('/log/:id', function(req, res, next){
    db.logs.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, todo){
        if(err){
           res.send(err); 
        } else {
            res.json(todo);
        }
    });
});

// Save Log
router.post('/log', function(req, res, next){
    var log = req.body;
    if(!log.datka || !(log.isCompleted + '')){
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.logs.save(log, function(err, result){
            if(err){
                res.send(err); 
            } else {
                res.json(result);
            }
        });
    }
});

// Update Logs
router.put('/log/:id', function(req, res, next){
    var log = req.body;
    var updObj = {};
    
    if(log.isCompleted){
        updObj.isCompleted = log.isCompleted;
    }
    
    if(log.datka){
        updObj.datka = log.datka;
    }
    
    if(!updObj){
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.logs.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result){
            if(err){
                res.send(err); 
            } else {
                res.json(result);
            }
        });
    }
});

// Delete Log
router.delete('/log/:id', function(req, res, next){
    db.logs.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result){
        if(err){
            res.send(err); 
        } else {
            res.json(result);
        }
    });
});


module.exports=router;