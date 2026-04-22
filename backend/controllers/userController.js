const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: 'Server error fetching profile' });
  }
};

exports.getAdminDashboard = async (req, res) => {
  try {
    // Return some mock stats or fetch actual data for admin
    const totalUsers = await User.countDocuments();
    const adminUsers = await User.countDocuments({ role: 'admin' });
    const regularUsers = await User.countDocuments({ role: 'user' });
    
    // Also fetch a list of all users (excluding passwords)
    const users = await User.find().select('-password');

    res.json({
      message: 'Welcome to the Admin Dashboard',
      stats: {
        totalUsers,
        adminUsers,
        regularUsers
      },
      users
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).json({ message: 'Server error fetching admin dashboard' });
  }
};
