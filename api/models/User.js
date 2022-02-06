// Creating User Model

const mongoose = require('mongoose');   // importing mongoose

// Creatinh UserSchema
const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },    // isAdmin means kya jo user hai wo admin hai, that's why we used boolean type and put the defaultvalue to false
        //  createdAt: Date.now(),   // This will show the current date on which user is created, but we have an awesome function timestamps
    },
    { timestamps: true }   // This will create createdAt and updatedAt time both
);

module.exports = mongoose.model("User", UserSchema)