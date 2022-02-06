// Creating Order Model

const mongoose = require('mongoose');   // importing mongoose

// Creatinh OrderSchema
const OrderSchema = new mongoose.Schema(
    {
         userId: {type: String, required: true},
         //it can be multiple products so it's gonna be array but i'm not gonna write here that because i'm gonna indicate here some specific properties so what i will do is writing here [] 
         products: [
             {
                 productId:{type:String},
                 quantity:{type:Number, default:1},   //by default when we create any product inside our cart it's gonna be just one and user can increase and decrease this number 
             }
         ],
         amount: {type:Number, required:true},
         address: {type:Object, required:true}, //it's going to be type string actually after purchasing the stripe library is going to return us an object so we can use it i'll say just objects that because it's going to contain line one line two city country and other informations so we can write here object
         status: {type:String, default: "Pending"}, //by default it's gonna be pending that because after purchasing is gonna be "pending" after shipping the product we can just make here its "own way" or something like that and after that when the user receives its order we are gonna make here "received" or something like that 
    },
    {timestamps: true}   // This will create createdAt and updatedAt time both
    );

    module.exports = mongoose.model("Order", OrderSchema);



