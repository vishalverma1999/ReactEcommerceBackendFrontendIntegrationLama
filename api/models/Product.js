// Creating Product Model

const mongoose = require('mongoose');   // importing mongoose

// Creating ProductSchema
const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },           //we can have more than one category so i will write here array so basically we can put any category names inside this array 
        size: { type: Array },         //we can have more than one size so i will write here array so basically we can put any sizes inside this array like m,xl,l,s...
        color: { type: Array },       //we can have more than one color so i will write here array so basically we can put any colors inside this array
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true }   // This will create createdAt and updatedAt time both
);

module.exports = mongoose.model("Product", ProductSchema)