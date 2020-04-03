const {User, Chat} = require('./../models');
const {BadRequestError, NotFoundError} = require('../utils/errors');

module.exports.createChat = async (req, res, next) => {
    try {
        const {
            headers: {
                authorization: userId,
            },
            body,
        } = req;

        const chat = await Chat.create({
            ...body,
            owner: userId,
        });
        if (chat) {
            return res.status(201).send(chat);
        }
        next(new BadRequestError());
    } catch (e) {
        next(e);
    }
};

module.exports.joinToChat = async (req, res, next) => {
    try {

        const {
            headers: {
                authorization: userId,
            },
            chat,
        } = req;
        chat.users.push(userId);
        const savedChat = await chat.save();
        if (savedChat) {
            const chatWithOwner = await Chat.findOne(chat).populate('owner').populate('users');
            return res.send(chatWithOwner);
        }
        next(new BadRequestError());
    } catch (e) {
        res.status(400).send(e);
    }
};

module.exports.getChat = async (req, res, next) => {
    try {
        const chat = await Chat.findById(req.params.chatId).populate('users', {
            chats: 0,
        }).populate('owner', {
            chats: 0,
        });
        if (chat){
            res.send(chat);
        }
        next(new NotFoundError());
    } catch (e) {
        res.send(e);
    }
};
