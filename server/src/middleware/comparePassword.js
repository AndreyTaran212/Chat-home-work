const { BadRequestError } = require('../utils/errors');
module.exports = async (req, res, next) => {
  try {

    if (await req.user.comparePassword(req.body.password)) {

      return next();
    }
    next(new BadRequestError());
  } catch (e) {
    next(e);
  }
};