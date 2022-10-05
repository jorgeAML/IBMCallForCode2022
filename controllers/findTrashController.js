//Trash controller
const FindMyTrash = require('../models/findTrashModel');

module.exports = {
    index: (req, res, next) => {
        FindMyTrash.find({})
        .then(findmytrashes => {
            res.locals.findmytrashes = findmytrashes;
            next();
        }).catch(error => {
            console.log(`Error Fetching find my trash section values ${error.message}`);
            next(error);
        });
    },
    indexView: (req, res) => {
        res.render("findTrash/index", {title: "Find Circular Economy"});
    },
    new: (req, res) => {
        res.render("findTrash/new", {title: "Find and reuse"});
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
        FindMyTrash.create(recycleParams)
            .then(findmytrashes => {
                res.locals.redirect = "/findTrash";
                res.locals.findmytrashes = findmytrashes;
                next();
            }).catch(error => {
                console.log(`Error saving finding trashes values ${error.message}`);
                next(error);
            });
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if(redirectPath) res.redirect(redirectPath);
        else(next);
    }
    
}