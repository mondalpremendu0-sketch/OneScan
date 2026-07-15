const User = require('../model/user.model.js');
const Link = require('../model/socialLink.model.js');

// @desc    Get user profile and links by slug
// @route   GET /api/public/:slug
// @access  Public
async function getPublicProfile(req, res) {
  try {
    const { slug } = req.params;

    // 1. Find the user by their unique slug (excluding the password)
    const user = await User.findOne({ slug }).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "Profile not found" 
      });
    }

    // 2. Find the links document associated with this user's ID
    const profileData = await Link.findOne({ userId: user._id });

    // 3. Return the combined data
    res.status(200).json({
      success: true,
      data: {
        user: {
          username: user.slug,
          bio: user.bio,
          avatarUrl: user.avatarUrl
        },
        profileTitle: profileData ? profileData.title : "",
        links: profileData ? profileData.links : []
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error fetching public profile",
      error: error.message
    });
  }
}

module.exports = { getPublicProfile };