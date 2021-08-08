var validator = require('validator');


module.exports.validateEmail = function (req, res, next) {
    if (req.body.email != null) {
        if (!validator.isEmail(req.body.email)) {    // if (validator.isEmail(req.body.email) == false) {   -> Same thing...
            res.status(400).send({ message: "invalid email input." });
            return;  // Important***
        }
    }
    next();
};