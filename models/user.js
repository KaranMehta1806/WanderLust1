const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")  
// automatically add username,hash and salt field to store username and 
// hashed password and salt value

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
})

userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", userSchema);


