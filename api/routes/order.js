const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE ORDER
router.post("/", verifyToken, async (req, res) => {

    const newOrder = new Order(req.body);   //req.body only beacuse we will send everything in the body that is present in Order Model

    try {
        const savedOrder = await newOrder.save();   // saving to database
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(err);
    }
})



// Update ORDER, Only ADMIN Can update this
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {

        const updatedOrder = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body         // so how i'm gonna set new information to my user it's really easy i will say set and request and body basically take everything inside req.body and set it again if you do that it's not gonna return you this updated user to prevent this you should write {new:true}
        }, { new: true })

        res.status(200).json(updatedOrder);  // updatedOrder

    } catch (error) {
        res.status(500).json(error);
    }
})



// DELETE Only ADMIN Can delete(it's like orders history which can be deleted inly by admin)
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {    

    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})



// GET USER ORDERS
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {   // /find/:id --- THIS IS USERID and NoT CART ID

    try {
        const orders = await Order.find({ id: req.params.id });   // we will use find() and won't use findOne() because users can have more than one order

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})



// GET ALL ORDERS, it's gonna be just main url and only admin can reach this data because we are going to see all orders of all users 
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {

        const orders = await Order.find();
        res.status(200).json(orders);  //  i'm gonna send all carts

    } catch (error) {

        res.status(500).json(err);
    }

})


// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {

    //i'm gonna do this similar thing that we have done for users remember every user per month but this time i'm gonna use only this month and previous month only september and august that because we are gonna compare our incomes
    const date = new Date();  // if it's first september today
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));   // it's gonna be first august 
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));  // it's gonna be first july
    console.log(previousMonth);

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },   //
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",    // remember in our order model we have userid, products and amount we are gonna take this amount and after when we group our elements we are gonna sum all these amounts per month
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);

        res.status(200).json(income);
    } catch (error) {

        res.status(500).json(error);
    }
})


module.exports = router;


/*

 */