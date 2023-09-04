const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/user/:id').post(userController.getUser);

module.exports = router;