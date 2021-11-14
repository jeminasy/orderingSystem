const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(5000, (err) => {
    if(!err){
        console.log('Application is running port 5000...');
    }else {
        console.log('Failed to run application :c');
    }
});

const conString = "mongodb://localhost/finalsproj";
mongoose.connect(conString, (err) => {
    if (!err){
        console.log('Connected to MongoDB!');
    }else {
        console.log('Failed to connect to MongoDB :c');
    }
});

const user = require('./routes/users');
const custom = require('./routes/customs');

app.use('/user', user);
app.use('/custom', custom);