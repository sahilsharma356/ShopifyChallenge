var express = require("express"); 
var app = express(); 
var request = require("request");
var http = require("http"); 

// var server = http.createServer(function(req,res){
// 	res.end("hello"); 
// });

app.get("/results", function(req, res){
    var search = req.query.search; 
    var URL = "http://www.omdbapi.com/?s=harry&apikey=thewdb"
	    
    request(URL, function(error, response, body){
        if(!error && response.statusCode == 200){
            res.end(body); 
        }
    }); 
});  

app.listen('3000', function(){
    console.log("Github search has started"); 
}); 