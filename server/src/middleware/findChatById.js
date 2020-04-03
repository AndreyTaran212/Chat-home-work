const {ChatError} = require('./../utils/errors');

const {Chat} = require('./../models');

module.exports = async (req, res, next) => {
    try {

        const chat = await Chat.findById({
            id: req.body.authorId,
        });
        if (chat) {
            req.chat = chat;
            return next();
        }
        next(new ChatError());
    } catch (e) {
        next(e);
    }
};