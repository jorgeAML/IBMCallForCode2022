const mongoose = require('mongoose');
const {Schema} = mongoose;

const easyRecycleSchema = new Schema ({
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

let LOCAL_AREA = 502;

module.exports = mongoose.model("EasyRecicle", easyRecycleSchema)