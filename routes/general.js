const router = require('express').Router();
const generalController = require('../controllers/generalController');


router.get('/', generalController.renderHomePage);
router.get('/menu', generalController.renderMenuPage);
router.get('/specials-offers', generalController.renderSpecialsOffers);



module.exports = router;