const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
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
    }],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
}, {timestamps: true});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;