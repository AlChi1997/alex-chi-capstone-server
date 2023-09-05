const router = require('express').Router();
const interestsController = require('../controllers/interestsController');

router.route('/interests/:id').get(interestsController.getInterests);

module.exports = router;