const {getChat, createChat, joinToChat} = require( "../controllers/chat.controller");
const router = require('express').Router();
const { saveProfilePicture } = require('./../middleware/multer.js');
const userController = require('../controllers/user.controller.js');
const findUserByLogin = require('./../middleware/findUserByLogin.js');
const findChatById = require('./../middleware/findChatById.js');
const comparePassword = require('./../middleware/comparePassword.js');
router.post('/sign_up',
  saveProfilePicture,
  (req, res, next) => {

    req.body.profilePicture = req.file.filename;
    next();
  },
  userController.createUser);
router.post('/login',
  findUserByLogin,
  comparePassword,
  (req, res) => res.send(req.user),
);

router.route('/homepage(/:chatId)?')
    .get(getChat)
    .post(createChat);

router.route('/homepage/:/chatId/users')
    .post(
        findChatById,
        joinToChat);

router.route('/homepage/:chatId/message(/:messageId)').post();

module.exports = router;