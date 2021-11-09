const { Product, validate } = require('../models/product');
const express = require('express');
// const mongoose = require('mongoose');

const router = express.Router();

router.get('/shop', async (req, res) => {
    const product = await Product.find().sort('name');
    res.send(product);
    // Product.find()
    //     .then(foundProducts => res.json(foundProducts))
});

router.get('/shop/:_id', async (req, res) => {
    const product = await Product.findById(req.params._id);
    if (!product) return res.status(404).send('The Product with the given ID does not exist.');
    res.send(product);
});

router.post('/addproduct', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let product = new Product({ 
        name: req.body.name,
        category: req.body.category,
        desc: req.body.desc,
        price: req.body.price,
        image: req.body.image
    });
    product = await product.save();
    res.send(product);
});

// router.put('/:id', async (req, res) => {
//     const { error } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     const product = await Product.findByIdAndUpdate(req.params.id, { 
//         name: req.body.name,
//         category: req.body.category,
//         desc: req.body.desc,
//         price: req.body.price,
//         image: req.body.image
//     }, {new: true});
    
//     if (!product) return res.status(404).send('The Product with the given ID does not exist.');

//     res.send(product);
// });

// router.delete('/:id', async (req, res) => {
//     const product = await Product.findByIdAndRemove(req.params.id);

//     if (!product) return res.status(404).send('The Product with the given ID does not exist.');

//     res.send(product);
// });

module.exports = router;