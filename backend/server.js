const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
})

const exerciseSRouter = require('./Routes/exercises');
const usersRouter = require('./Routes/users');

app.use('/exercises', exerciseSRouter);
app.use('/users', usersRouter);

app.listen(port, () =>{
    console.log(`Server is Running on port: ${port}`);
});