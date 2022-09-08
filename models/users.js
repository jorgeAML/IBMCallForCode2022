const mongoose = require('mongoose'),
    {Schema} = mongoose,
    userSchema = new Schema({
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    });

module.exports = mongoose.model("User", userSchema);