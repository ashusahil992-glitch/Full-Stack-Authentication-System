const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Protected route for any authenticated user
router.get('/profile', authMiddleware, userController.getProfile);

// Protected route for admins only
router.get('/admin', authMiddleware, roleMiddleware('admin'), userController.getAdminDashboard);

module.exports = router;
