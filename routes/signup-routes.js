const router = require('express').Router();
const signupController = require('../controllers/signupController');

router.route('/signup').post(signupController.signup);

module.exports = router;