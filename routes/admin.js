const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.mainMenu);
router.get('/login', adminController.loginPage);
router.post('/login', adminController.loginProcess);
router.get('/menu-categories', adminController.menuCats);
router.post('/menu-categories', adminController.addMenuCategory);
router.delete('/menu-categories', adminController.deleteMenuCat);
router.patch('/menu-categories', adminController.editMenuCat);

module.exports = router;