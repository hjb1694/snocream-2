const router = require('express').Router();
const generalController = require('../controllers/generalController');


router.get('/', generalController.renderHomePage);



module.exports = router;