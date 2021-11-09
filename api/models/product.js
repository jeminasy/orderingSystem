const mongoose = require('mongoose');
const Joi = require('joi');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        lowercase: true,
    },
    category: {
        type: String,
        enum: ['cakes', 'cookies and pastries'],
        required: true,
        lowercase: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
    price: {
        type: Number, 
        required: true,
        min: 0
    },
    image: {
        type: String, 
        required: true
    }
});
const Product = mongoose.model('Product', productSchema);

function validateProduct(product) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        category: Joi.string().required(),
        desc: Joi.string().min(10).max(500).required(),
        price: Joi.number().min(0).required(),
        image: Joi.string().required()    
    });
    return schema.validate(product);
}

exports.productSchema = productSchema;
exports.Product = Product;
exports.validate = validateProduct;