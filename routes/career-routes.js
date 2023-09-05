const router = require('express').Router();
const careersController = require('../controllers/careersController');

router.route('/careers/:id').post(careersController.getCareers);

module.exports = router;