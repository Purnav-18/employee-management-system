const mongoose = require('mongoose')

const Userschema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,

    },
    image: {
        type: String,

    },
    status: {
        type: String,
    },
    role: {
        type: String,
    },
    team: {
        type: String,
    },
});

const User = mongoose.model('User', Userschema)

module.exports = User