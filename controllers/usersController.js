const User = require('../models/users');

const getUsersParams = (body) => {
    return {
        email: body.email,
        password: body.password
    }
}

module.exports = {
    login: (req, res) => {
        res.render("users/login");
    }
}
