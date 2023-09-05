const router = require('express').Router();
const careersController = require('../controllers/careersController');

router.post('/careers/:id', careersController.postCareers);
router.get('/careers/:id', careersController.getCareers);

module.exports = router;

module.exports = router;