const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE CART-  basically any user can create its own cart so i will use verifyToken as middleware
router.post("/", verifyToken, async (req, res) => {

    const newCart = new Cart(req.body);   //req.body only beacuse we will send everything in the body that is present in Cart Model i.e. userId and products array productID and quantity

    try {
        const savedCart = await newCart.save();   // saving to database
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(err);
    }
})



// Update CART, user can change its own cart so i will say verifyTokenAndAuthorization 
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {  

    try {

        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body         // so how i'm gonna set new information to my user it's really easy i will say set and request and body basically take everything inside req.body and set it again if you do that it's not gonna return you this updated user to prevent this you should write {new:true}
        }, { new: true })

        res.status(200).json(updatedCart);  // updatedCart

    } catch (error) {
        res.status(500).json(error);
    }
})



// DELETE, i can delete my own card so it's gonna be again verifyTokenAndAuthorization
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {   

    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})



// GET USER CART
router.get("/find/:id", verifyTokenAndAuthorization , async (req, res) => {   // /find/:id --- THIS IS USERID and NoT CART ID

    try {
        const cart = await Cart.findOne({id: req.params.id});   //  it's not gonna be findById() because it's not our cart id, it's going to be findOne() that because every user just has one cart and here is gonna be our cart and it's going to be my condition here which is id it's going to be request params and id by the way 

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
})



// GET ALL, it's gonna be just main url and only admin can reach this data because we are going to see all carts of all users 
router.get("/", verifyTokenAndAdmin, async (req,res)=>{

    try {
        
        const carts = await Cart.find();
        res.status(200).json(carts);  //  i'm gonna send all carts

    } catch (error) {

        res.status(500).json(err);
    }

})





module.exports = router;




/**

 */