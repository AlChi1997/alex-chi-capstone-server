const router = require('express').Router();
const loginController = require('../controllers/loginController');

router.route('/login').post(loginController.login);

module.exports = router;