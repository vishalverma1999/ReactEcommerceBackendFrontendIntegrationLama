const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();


// Update Operation, put because we are updating and here i'm gonna write some parameter which is user id so we should indicate here the specific user id and then middleware to verify jwt
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    // first we will check whether this token belongs to admin or client or not, req.user is the one which gets data in verifyToken, so we will match the id contained by token and id of the client, also we can check for isAdmin. But everytime we write. But if i write this like that for any request i should write it again and again, to prevent this we will make a function verifyTokenAndAuthorization inside middleware
    // if(req.user.id === req.params.id || req.user.isAdmin){}

    // before updating i'm going to check my password that because user can change its password so in this case i should again encrypt my password
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD).toString();
    }

    try {

        // i'm gonna write my user id first which is request and params and id or request user and id and after that i'm gonna write here whatever i'm gonna update
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body         // so how i'm gonna set new information to my user it's really easy i will say set and request and body basically take everything inside req.body and set it again if you do that it's not gonna return you this updated user to prevent this you should write {new:true}
        }, { new: true })

        res.status(200).json(updatedUser);  // updatedUser

    } catch (error) {
        res.status(500).json(error);
    }
})



// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})



// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const user = await User.findById(req.params.id);

        // res.status(200).json(user);   // remember user is sending all information of the user to prevent this i'm just gonna destructure my other properties so i can see password and others and it's gonna send only others

        const { password, ...others } = user._doc;  // mongodb stores our documents inside "_doc" but we are passing user directly, i know it's a little bit weird but you should write here user._doc
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    const query = req.query.new;   // 'new' is the name of our query in url

    try {
        // const users = await User.find(); // await User.find() This will find every user

        // but i'm gonna show you something else here we can use any query in our url, url is http://localhost:5000/api/users?new=true and Query is new=true 
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();  // if query is there then return 5 users, sort with _id: -1 helps us to show the latest user and if no query then find every user

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})


// GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {

    const date = new Date();  // creates current date
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));   // will generate last year today

    try {
        // as i said i run a user statistics per month to do that i should group my items and for this we can use mongodb aggregate 
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },   //  match is gonna try to match my condition what's my condition it's gonna be createdAt date because remember every user has createdAt and i will say it's gonna be less than today and greater than last year basically i will just say greater than last year
            {
                // okay and i wanna take month numbers. To do that i will use project and month and it's going to be $month and my createdAt inside my db. We just create month variable here and we set- take the month number from inside my createdAt date what i mean by that for example this user has been created at 2021-09-18 it's gonna take this number which is nine(september) and it's gonna assign to the month variable, it's that easy if you say year it's gonna just return 2021.
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                // After this project i can group my items my users. I will say group and you should write here id first it should be unique so i can choose my month variable here for september it's going to be 9 for august it's going to be 8 something like that and also i need total user number so i will say total and i can use sum method here and if i say just one it's gonna sum every registered user
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ])

        res.status(200).json(data);
    } 
    catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;


