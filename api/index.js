// Aftre creating index.js the first step is to initiate nodeJs application
// To do that, in terminal write- npm init -y
// this command will generate package.json folder
// Now we will install dependencies or libraries either by using npm i names_of_dependencies or yarn add names_of_dependencies, here we used are- yarn add express mongoose dotenv nodemon
// express which is node js framework acts as server

/*
firstly we are going to be using express it's going to be our node.js framework so we can create a rest api on our server and second one will be mongoose in this project we are going to be using mongodb so after that library we can create our collections documents and after that we can executecreating updating deleting or reading operations now we can write dotenv it's a library that we can hide our secret keys crucial values or other important stuff so nobody can reach them for example we are gonna be using stripe payment method it's gonna provide us a secret key for the identification if you don't hide this secret key everybody can create a payment operation and charge your users to prevent this we will be using this awesome library and after that finally we are going to be using nodemoon essentially it allows us to refresh our application for every changes otherwise whenever we make any changes we have to go to the terminal and right here start this application again and again  so basically it's a hot reload
*/

// console.log("hello nodemon");  // command to start application is node index.js, but if any change occur u need to again run the command therefore we will use nodemon which automatically refreshes up and display the new changes occur 
// To use nodemon do certain changes--- in package.json() > scrips > replace test with start and it's corresponding value to "nodemon mainFile" here mainFile is index.js..................NOW just write npm start or yarn start to start the server


// we can create our express server, i'm gonna say const express and it's gonna require my express library
const express = require('express');   

// okay we imported our express so how we are gonna use it it's really easy only thing you should do is writing here const app and express function that's all this is going to be our application
const app = express(); 


// So how we can connect to mongo server let's write here our library let's import const mongoose it's going to be required mongoose
const mongoose = require("mongoose");   // importing mongoose library

const dotenv = require('dotenv');   // importing library

const userRoute = require("./routes/user");  // importing user route  
const authRoute = require("./routes/auth");  // importing auth route 
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require('cors');


dotenv.config();   // we should write here configuration otherwise you can't use it

// it's a promise so basically it can be successful or it can just fail how we are gonna control this i will come here and say .then which means if it's successful i'm gonna write my function it's gonna be just console.log and db connection successful so what about error if there is an error i will write here catch it's gonna catch this error so i can take this error i will just print this on my console console.log(error)
mongoose.connect(process.env.MONGO_URL)
.then(()=> {console.log("DB Connection is Successfull!")})
.catch((err) => {
    console.log(err);
});

// it's not a good idea to write here all our endpoints, so we will make another folder called routes
// app.get("/api/test", ()=>{
//     console.log("test is successfull");   //when you hit this endpoint test is successfull will be shown in terminal
// })

app.use(cors());    // Using cors
app.use(express.json());    //our application is not able to take any json object to prevent this we will go to index.js and before my routes we are gonna write app.use(express.json()); 
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


// but to run this application we should listen any number so i will say app dot listen i'm gonna provide a port numbe i will say for example 5000 and here callback function after running application it's gonna show for example back-end server is running as you can see
app.listen(process.env.PORT || 5000, ()=>{              // if process.env.PORT is available use it else use 5000
    console.log("backend server is running")
});


