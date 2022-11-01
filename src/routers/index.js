const router    = require('express').Router();
const skils     = require('./skils');

router.use('/skils', skils);

module.exports = router;