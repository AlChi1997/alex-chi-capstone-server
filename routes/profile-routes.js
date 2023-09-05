const router = require('express').Router();
const profileController = require('../controllers/profileController');

router.route('/profile/:id').post(profileController.updateProfile);

module.exports = router;