const express = require('express');
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product");
require('dotenv').config()
const PORT = process.env.PORT || 8000;


//------------ DB Configuration ------------//
// const db = process.env.MongoURI


//------------ Mongo Connection ------------//
mongoose.connect(process.env.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.log(err));

//For Reading JSON format 
app.use(express.json());

//For Routes
app.use("/products", productRoute);

//Server is listenning that port
app.listen(PORT, () => {
    console.log(`Backend Server running on PORT ${PORT}`);
})

