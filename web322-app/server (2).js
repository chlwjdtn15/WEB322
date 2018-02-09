/********************************************************************************* 
 * WEB322 – Assignment 03 
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
 *  No part of this assignment has been copied manually or electronically from any other source 
 * (including web sites) or distributed to other students. 
 * 
 *  Name: Jung Soo Choi Student ID: 134708155 Date: October 4th, 2017
 * 
 * Online (Heroku) URL: https://mysterious-shore-75366.herokuapp.com/
 * 
 * *******************************************************************************/

var express = require("express");
var data = require("./data-service.js");

var app = express();

var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;




//app. from now
app.use(express.static('public'));

app.get("/", function(req,res)
{
    res.sendFile(path.join(__dirname + "/views/home.html"))
});

app.get("/about", function(req,res)
{
    res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.get("/employees", function(req,res)
{
   if(req.query.status){
       data.getEmployeesByStatus(req.query.status).then(function(data){
           res.json(data);
       }).catch(function(err){
           res.json({message: err});
       });
   }else if(req.query.department){
       data.getEmployeesByDepartment(req.query.department).then(function(data){
           res.json(data);
       }).catch(function(err){
           res.json({message: err});
       });
   }else if(req.query.manager){
       data.getEmployeesByManager(req.query.manager).then(function(data){
           res.json(data);
       }).catch(function(err){
           res.json({message: err});
       });
   }else{
       data.getAllEmployees().then(function(data){
           res.json(data);
       }).catch(function(err){
           res.json({message: err});
       });
   }
});

app.get("/employee/:num", function(req,res){
    data.getEmployeesByNum(req.params.num).then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message: err});
    });
});

app.get("/managers", function(req,res){
    data.getManager().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({meeage: err});
    });
});

app.get("/departments", function(req,res){
    data.getDepartments().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message: err});
    });
});

app.use(function(req,res)
{
    res.status(404).send("Page not found");
});

app.listen(HTTP_PORT, function(res,req){
    console.log("Express http server listening on: " + HTTP_PORT);
    data.initialize().then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    });
});