const router = require("express").Router();
const User = require("../models/User");    // importing the User model
const CryptoJS = require("crypto-js");   // importing crypto library to encrypt password, to add package use yarn add crypto-js 
const jwt = require("jsonwebtoken");   // importing jwt library

// REGISTER- it is a post request because the user is gonna send us username password and other information
// Endpoint- /register
router.post("/register", async (req, res) => {

    // Using our User model to create model object
    //we are going to use our models firstly i will say const new user and it's gonna be new and user model okay it's not here let's import i'll say const user require ../models/User now i'm going to say username equals request and body remember we are taking this from user model and username and others will be the same email and password, so basically if we send here some username, email-gmail.com and password-123456 okay we are going to set this body but it doesn't mean we are creating this user in our db it's just that model object we should send this to our db
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD).toString(),   // now we are gonna save this inside our db only thing i should do is writing here to string, AES Encryption - https://www.npmjs.com/package/crypto-js
    });


    //There can be any problem in our server or db, so to catch our error we can write or wrap savedUser inside try and catch block.
    try {
        //so how we are gonna do this we are gonna use save method so if i say new user and save it's gonna save this user to db but there's a problem here, i can't do this directly that because it's a promise which is async function what i mean by that, when we save any documents or update or delete or any other things in our db basically it takes couple milliseconds or even seconds it depends on your server it depends on mongodb server or the internet connection of the user so basically there is no chance to know this exact time so if i write here for example const saved user and if i say console.log this saved user it's not gonna work that because it's gonna start this process and after that instantly it's gonna try to write saved user but that time we don't have saved user because it takes couple milliseconds, to prevent this we should use async await
        const savedUser = await newUser.save();  // To send created model object to db use save() function
        // console.log(savedUser);  // consoling the savedUser does not makes any sense, so we will send it to the client side
        res.status(201).json(savedUser);   // we can also simply use res.send(), 200 stands for successfull and 201 stands for successfully added
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);     //In this project for any type of error we will be using only 500 status code
    }

})
//-----------------------------------------------------------------------------------------------------

// Login endpoint, post request
router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });  // i'm going to find my user by using User model and i'm gonna use findOne() method here because there is only one user with same username so i'm gonna write here my condition it's gonna be username request and body and username so when you find Vishal inside db just return to me of course if the password is correct
        !user && res.status(401).json("Wrong Credentials");   // if username not found

        // Decrypting hashed Password, below shown 2 line are the standard steps to decrypt, see here https://www.npmjs.com/package/crypto-js > AES ENCRYPTION PLAINTEXT
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASSWORD);   // code will be returned therefore it is needed to convert it to string
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);  //by the way if you are using any other character you can write here any specific version for example CryptoJS.enc.Utf8

        originalPassword !== req.body.password && res.status(401).json("Wrong Credentials");  // if entered password doesn't matches with the password in database


        // after login process if everything is ok then we will create jsonwebtoken 
        //  i'm gonna pass here some properties first one will be our userId, basically you can pass here any property we are gonna keep userId and isAdmin properties inside our token, that's because after for example when we try to delete user we are going to check id inside json web token if it equals this number this user id it means this user belongs to our client so they can delete this user or update or whatever and also we can use isAdmin property here if the user is admin he can just delete any user or make any crude operation for any other collections here
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SEC,   // jwt secret key
            { expiresIn: "3d" }      // after 3days the token will expire and u need to login again
        )


        // by the way after login process in our react application we are gonna save these informations, but there is a problem here that we can see this password, even if no one knows our secret key here for our crypto.js you should never ever reveal your password anywhere, to prevent i can use spread operator and destructuring and send my user every information but not password
        const { password, ...others } = user._doc;  // mongodb stores our documents inside "_doc" but we are passing user directly, i know it's a little bit weird but you should write here user._doc



        res.status(200).json({ ...others, accessToken });   // {others, accessToken} if it's written like this then accessToken will not be clubbed with the properties inside others, there will be 2 separate things 1st is others object and then next accessToken, BUT if we use spread operator like ...others which means to take out all the things from others object and hence fields inside others object will gonna be clubbed with the accessToken
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;




/*

 */

