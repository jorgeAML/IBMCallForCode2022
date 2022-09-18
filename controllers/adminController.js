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
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if(redirectPath) res.redirect(redirectPath);
        else(next);
    },
    edit: (req, res, next) => {
        let easyID = req.params.id;
        EasyRecycle.findById(easyID)
            .then(easyrecicles => {
                res.render("admin/edit", {
                    easyrecicles: easyrecicles,
                    title: "Edit values for easyRecycle section"
                }); 
            }).catch(error => {
                console.log(`Error fetching values by ID ${error.message}`);
            });
    },
    update: (req, res, next) => {
        let easyID = req.params.id,
            recycleParams = {
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address,
                items: req.body.items,
                description: req.body.description,
                date: req.body.date
            };
            EasyRecycle.findByIdAndUpdate(easyID, {
            $set: recycleParams
        }).then(easyrecicles => {
            res.locals.redirect = '/admin';
            res.locals.easyrecicles = easyrecicles;
            next();
        }).catch(error => {
            console.log(`Error updating recycle values by ID: ${error.message}`);
            next(error);
        });
    },
    delete: (req, res, next) => {
        let easyID = req.params.id;
        EasyRecycle.findByIdAndRemove(easyID)
            .then(() => {
                res.locals.redirect = '/admin';
                next();
            }).catch (error => {
                console.log(`Error deleting recycle values by ID ${error.message}`);
                next(error);
            });
    }
}
