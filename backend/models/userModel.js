const mongoose = require("mongoose");

//Schema creation
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,

    },
},
{timestamps:true}
);

//create Model
const User = mongoose.model('User',userSchema);

module.exports = User;