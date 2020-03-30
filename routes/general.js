const router = require('express').Router();
const generalController = require('../controllers/generalController');


router.get('/', generalController.renderHomePage);
router.get('/menu', generalController.renderMenuPage);



module.exports = router;