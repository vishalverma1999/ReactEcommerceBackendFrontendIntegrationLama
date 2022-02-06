const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE PRODUCT- obviously it can be created only by the admin
router.post("/", verifyTokenAndAdmin, async (req, res) => {

    const newProduct = new Product(req.body);   //req.body only beacuse we will send everything in the body that is present in Product Model i.e. title,desc,img,categories,color,size,price

    try {
        const savedProduct = await newProduct.save();   // saving to database
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(err);
    }
})



// Update PRODUCT, put because we are updating and here i'm gonna write some parameter which is user id so we should indicate here the specific user id and then middleware to verify jwt
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {   // here id is the id of product

    try {

        // i'm gonna write my user id first which is request and params and id or request user and id and after that i'm gonna write here whatever i'm gonna update
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body         // so how i'm gonna set new information to my user it's really easy i will say set and request and body basically take everything inside req.body and set it again if you do that it's not gonna return you this updated user to prevent this you should write {new:true}
        }, { new: true })

        res.status(200).json(updatedProduct);  // updatedProduct

    } catch (error) {
        res.status(500).json(error);
    }
})



// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {    // here id is the id of product

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})



// GET PRODUCT
router.get("/find/:id", async (req, res) => {   //  this time users and admins can reach this data or also guest users so i'm going to remove middleware, so that everybody can see products


    try {
        const product = await Product.findById(req.params.id);

        // res.status(200).json(user);   // remember user is sending all information of the user to prevent this i'm just gonna destructure my other properties so i can see password and others and it's gonna send only others

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})



// GET ALL PRODUCTS, again everbody can fetch all Products
router.get("/", async (req, res) => {

    // this time we are gonna have two queries not only new also we are gonna fetch by our category
    const qNew = req.query.new;   // 'new' is the name of our query in url
    const qCategory = req.query.category;  // 'category' is the name of our query in url
    // so basically we can fetch all products by createdAt dates and just five of them and by their category

    try {

        let products; // an array
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {

            // inside find() this time i'm going to write a condition which is categories because remember Product model has categories of type: Array, basically we are going to say if the category query which we created here is inside this array we are gonna just fetch these products so how i'm gonna do this i will say $in and qCategory
            products = await Product.find({
                categories: {
                    $in: [qCategory],  
                },
            });
        } else {
            // if there is no query basically our products will be all products inside our db
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
})




module.exports = router;
