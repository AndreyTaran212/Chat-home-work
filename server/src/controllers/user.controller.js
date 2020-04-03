const {BadRequestError, NotFoundError} = require('../utils/errors');
const {User} = require('./../models');

module.exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        if (user) {
            const preparedUser = user.toObject();
            delete preparedUser.password;
            return res.status(201).send(preparedUser);
        }

        next(new BadRequestError());

    } catch (e) {
        next(e);
    }
};

module.exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id, {
            __v: false,
        });
        if (user) {
            return res.send(user)
        }
        next(new NotFoundError)

    } catch (e) {
        next(e);
    }

};

