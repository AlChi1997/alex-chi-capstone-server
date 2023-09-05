const router = require('express').Router();
const interestsController = require('../controllers/interestsController');

router.route('/interests/:id').get(interestsController.getInterests);
router.route('/interests/:id').post(interestsController.updateInterests);

module.exports = router;