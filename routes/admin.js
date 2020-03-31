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
router.get('/menu-items/:id', adminController.singleMenuItem);
router.get('/menu-items', adminController.menuItems);

module.exports = router;