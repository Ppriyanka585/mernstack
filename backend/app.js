const express = require('express');
const app=express();
const cors= require('cors');
const PORT =8745
app.use(cors());

app.use(express.json());//to pass the json data
app.use(express.urlencoded({extended:true}));// to parse the url data
app.use(express.static('public'));// to serve the static files

require('./dB');//! mongoose DB connection folder is called here when server starts up


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})