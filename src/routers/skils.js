const router    = require('express').Router();
const {Skils} = require('../controllers/AboutMeControllers');

router.get('/', Skils);

module.exports = router;