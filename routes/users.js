const express = require('express');
const User = require('../models/user');

const router = express.Router();

//get users
router.get('/', async (req, res) => {
    const user = await User.find();
    res.send(user);
});

//user profile

router.get('/profile/:id', async(req, res) => {
    
});

//login
router.get('/login', async (req, res) => {
    
});

//register new user
router.post('/register/create', async(req, res) => {
    const user = new User({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
    .then(result => console.log(result))
    .catch(err => res.status(400).json("Error", + err));
    // res.send(user);
    // console.log(user);
    console.log(user);
});

module.exports = router;