const jwt = require("jsonwebtoken");  // importing jwt

// verifyToken is middleware and it will take three parameters req, res and next
const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token;   // when we hit update endpoint, so at that time it's we are gonna provide jwt token in it's header
    if (authHeader) {
        const token = authHeader;
        //   if we have token we should just verify this. To do that i'm gonna use verify function jwt and verify i'm gonna write here my token and after that my secret key finally after verification it's going to return us either an error or if everything is okay it's going to return us a data
        jwt.verify(token, process.env.JWT_SEC, (err, data) => {    // here instead of data u can write anything like user, kjdkjd,euyre etc.

            if (err) res.status(403).json("Token is not valid!");   // it can be expired or wrong token

            req.user = data; // if everything is ok i'm gonna assign my user to my request, so basically remember we have req.body, req.header and i just created new one it's gonna be req.user you can write here whatever you want
            next();  // basically it's gonna leave this function and it's gonna go to router
        })
    } else {
        res.status(401).json("You are not authenticated");  // if there is no authHeader or token basically
    }
}



const verifyTokenAndAuthorization = (req, res, next) => {

    // we have next here, remember we can write any function here
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that! , webtoken id and id of the client not matched and also you are not the admin");
        }
    })
}


// example for order or product only admin can add any product so it means we should create another function here and it's gonna be verifyTokenAndAdmin
const verifyTokenAndAdmin = (req, res, next) => {

    // we have next here, remember we can write any function here
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that! , webtoken id and id of the client not matched and also you are not the admin");
        }
    })
}


module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };

