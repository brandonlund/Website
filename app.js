var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var text = "Welcome to Brandon's site! Hi Kaeli!";

app.get('/', (req, res)=>{
    res.send(text);
});

app.listen(port, ()=>{
    console.log(text)
    console.log('Running on port: ' + port);
});