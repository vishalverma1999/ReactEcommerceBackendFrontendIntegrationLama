// write in terminal "yarn add stripe" to add package at backend 
const router = require("express").Router();
const dotenv = require('dotenv');   // importing library
dotenv.config();   // we should write here configuration otherwise you can't use it

const stripe = require("stripe")(process.env.STRIPE_KEY);   // stripe package imported, There are two keys provided by stripe - 1) Publishable key for Frontend and 2) Secret key for Backend


router.post("/payment", (req, res) => {

    // So how i'm going to charge my clients it's really easy i will say stripe and charges and i'm gonna create a charge
    stripe.charges.create(
        {

        // i'm gonna write my req.body(totally 3 requestd we are goona make source,amount,currency) inside create, what it's going to include it's going to include our source first. source is going to be request and body i will say token id, then we make any payment the stripe is gonna return us a token id so we are gonna use it here.
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "USD",
        // After create object it's gonna return us either an error or successful response so let's write here stripe error and stripe response
    }, (stripeErr, stripeRes) => {   

        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    });
});

// that's all basically we are gonna make our payments like that so what about client side i'm not gonna use postman it's not a good idea to use postman instead i'm gonna be using a react application

module.exports = router;
