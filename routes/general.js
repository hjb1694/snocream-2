const router = require('express').Router();
const generalController = require('../controllers/generalController');


router.get('/', (req,res) => generalController.renderHomePage);



module.exports = router;