const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//[SECTION] Routes
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/order");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

// [SECTION] Environment Setup
require('dotenv').config(); 

const app = express();

// Connecting to MongoDB Atlas
mongoose.connect(process.env.MONGODB_STRING);

// If the connection is successful, output in the console
mongoose.connection.once("open", () => console.log("We're connected to the cloud database"));

// Setup for allowing the server to handle data from requests
// Allows your app to read json data
app.use(express.json());
// Allows your app to read data from forms
app.use(express.urlencoded({extended:true}));

// Port:
const port = 3000;

const corsOptions = {

	origin: ['http://zuitt-bootcamp-prod-521-8525-pontanar.s3-website.us-east-1.amazonaws.com', 'http://zuitt-bootcamp-prod-521-8462-grepo.s3-website.us-east-1.amazonaws.com', 'http://localhost:3000'],
	credentials: true,
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

//[SECTION] Backend Routes 
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/cart", cartRoutes);

if(require.main === module){
	app.listen(process.env.PORT || port, () => console.log(`Server running at port ${process.env.PORT || port}`));
}

module.exports = {app,mongoose};