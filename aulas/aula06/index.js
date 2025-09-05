const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Olá");
})

app.listen(8000,() =>{
    console.log("App está on!");
} )