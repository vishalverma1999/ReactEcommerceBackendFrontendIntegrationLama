// Creating Cart Model

const mongoose = require('mongoose');   // importing mongoose

// Creatinh CartSchema
const CartSchema = new mongoose.Schema(
    {
         userId: {type: String, required: true},
         //it can be multiple products so it's gonna be array but i'm not gonna write here that because i'm gonna indicate here some specific properties so what i will do is writing here [] 
         products: [
             {
                 productId:{type:String},
                 quantity:{type:Number, default:1},   //by default when we create any product inside our cart it's gonna be just one and user can increase and decrease this number 
             }
         ],
    },
    {timestamps: true}   // This will create createdAt and updatedAt time both
    );

    module.exports = mongoose.model("Cart", CartSchema)