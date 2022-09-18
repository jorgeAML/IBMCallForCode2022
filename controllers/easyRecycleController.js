const EasyRecycle = require('../models/recycle');

module.exports = {
    index: (req, res, next) => {
        EasyRecycle.find({})
        .then(easyrecicles => {
            res.locals.easyrecicles = easyrecicles;
            next();
        }).catch(error => {
            console.log(`Error Fetching Easy Recycle section values ${error.message}`);
            next(error);
        });
    },
    indexView: (req, res) => {
        res.render("easyRecycle/index", {title: "Circular Economy"});
    },
    new: (req, res) => {
        res.render("easyRecycle/new", {title: "Share and reuse"});
    },
    create: (req, res, next) => {
        let recycleParams = {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            items: req.body.items,
            description: req.body.description,
            date: req.body.date
        };
        EasyRecycle.create(recycleParams)
            .then(easyrecicles => {
                res.locals.redirect = "/recycle";
                res.locals.easyrecicle = easyrecicles;
                next();
            }).catch(error => {
                console.log(`Error saving recycle values ${error.message}`);
                next(error);
            });
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if(redirectPath) res.redirect(redirectPath);
        else(next);
    }
    
}
