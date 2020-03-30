const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/login', adminController.loginPage);
router.post('/login', adminController.loginProcess);

module.exports = router;