const router = require('express').Router();
const adminController = require('../controllers/adminController');
const isLoggedIn = require('../middleware/isLoggedIn');
const notLoggedIn = require('../middleware/notLoggedIn');

router.get('/', isLoggedIn, adminController.mainMenu);
router.get('/login', notLoggedIn, adminController.loginPage);
router.post('/login', notLoggedIn, adminController.loginProcess);
router.get('/menu-categories', isLoggedIn, adminController.menuCats);
router.post('/menu-categories', isLoggedIn, adminController.addMenuCategory);
router.delete('/menu-categories', isLoggedIn, adminController.deleteMenuCat);
router.patch('/menu-categories', isLoggedIn, adminController.editMenuCat);
router.get('/menu-items/new', isLoggedIn, adminController.newMenuItem);
router.post('/menu-items/new', isLoggedIn, adminController.processNewMenuItem);
router.delete('/menu-items/delete', isLoggedIn, adminController.deleteMenuItem);
router.get('/menu-items/:id', isLoggedIn, adminController.singleMenuItem);
router.get('/menu-items', isLoggedIn, adminController.menuItems);
router.get('/specials-offers', isLoggedIn, adminController.renderSpecialsOffers);
router.post('/specials-offers', isLoggedIn, adminController.addSpecialOffer);
router.delete('/specials-offers', isLoggedIn, adminController.deleteSpecialOffer);
router.get('/logout', isLoggedIn, adminController.logout);

module.exports = router;