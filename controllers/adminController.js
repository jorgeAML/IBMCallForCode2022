const EasyRecycle = require('../models/recycle');
const User = require('../models/users');

module.exports = {
    indexReycleForAdmin: (req, res, next) => {
        EasyRecycle.find({})
        .then(easyrecicles => {
            res.locals.easyrecicles = easyrecicles;
            next();
        }).catch(error => {
            console.log(`Error Fetching easy recycles values ${error.message}`);
            next(error);
        });
    },
    indexViewRecycleForAdmin: (req, res, next) => {
        res.render("admin/index", {title:"Welcome admin"});
    }

}
