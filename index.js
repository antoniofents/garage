/*
Load Twilio configuration from .env config file - the following environment
variables should be set:
process.env.TWILIO_ACCOUNT_SID
process.env.TWILIO_API_KEY
process.env.TWILIO_API_SECRET
process.env.TWILIO_CONFIGURATION_SID
*/
require('dotenv').load();
var http = require('http');
var path = require('path');
var express = require('express');

// Create Express webapp
var app = express();
app.use(express.static(path.join(__dirname, 'public')));



app.get('/restore', function(request,res){
    console.log("removing all users ");
    
    return;
});



// Create http server and run it
var server = http.createServer(app);

var port = process.env.PORT || 443 ;
server.listen(port, "0.0.0.0", function() {
    console.log('Express server running on 0.0.0.0:' + port);
});
