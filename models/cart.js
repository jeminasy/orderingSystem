const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: String,
        required: true, 
        unique: true  
    },
    items: [{
        quantity: {
            type: Number,
            default: 1
        },
        productId: String,
        baseId: String,
        frostingId: String,
        addonId: String,
        designId: String
    }]
}, {timestamps: true});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;