 // Creating Product Model

const mongoose = require('mongoose');   // importing mongoose

// Creating ProductSchema
const ProductSchema = new mongoose.Schema(
    {
          title: {type: String, required: true, unique: true},
         desc: {type: String, required: true},
         img: {type: String, required: true},
         categories: {type: Array},           //we can have more than one category so i will write here array so basically we can put any category names inside this array 
         size: {type: String},
         color: {type: String},
         price: {type: Number, required: true},
    },
    {timestamps: true}   // This will create createdAt and updatedAt time both
    );

    module.exports = mongoose.model("Product", ProductSchema)