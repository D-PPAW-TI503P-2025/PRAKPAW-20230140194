const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { addUserData, isAdmin } = require('../middleware/permissionMiddleware');
router.get('/daily', reportController.getDailyReport);
module.exports = router;
