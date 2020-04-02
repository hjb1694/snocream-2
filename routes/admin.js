const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.mainMenu);
router.get('/login', adminController.loginPage);
router.post('/login', adminController.loginProcess);
router.get('/menu-categories', adminController.menuCats);
router.post('/menu-categories', adminController.addMenuCategory);
router.delete('/menu-categories', adminController.deleteMenuCat);
router.patch('/menu-categories', adminController.editMenuCat);
router.get('/menu-items/new', adminController.newMenuItem);
router.post('/menu-items/new', adminController.processNewMenuItem);
router.delete('/menu-items/delete', adminController.deleteMenuItem);
router.get('/menu-items/:id', adminController.singleMenuItem);
router.get('/menu-items', adminController.menuItems);
router.get('/specials-offers', adminController.renderSpecialsOffers);
router.post('/specials-offers', adminController.addSpecialOffer);
router.delete('/specials-offers', adminController.deleteSpecialOffer);

module.exports = router;