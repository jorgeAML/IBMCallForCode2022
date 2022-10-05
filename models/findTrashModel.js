const mongoose = require('mongoose');
const {Schema} = mongoose;

const findMyTrashSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    items: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('FindMyTrash', findMyTrashSchema);