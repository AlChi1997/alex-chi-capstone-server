const router = require('express').Router();
const educationController = require('../controllers/educationController');

router.route('/education/:id').get(educationController.getEducation);

module.exports = router;