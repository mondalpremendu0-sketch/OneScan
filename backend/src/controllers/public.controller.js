const Profile = require("../model/profile.model.js");


// @desc     Get a user's public profile by username (what the QR code resolves to)
// @route   GET /api/public/:username
// @access  Public (no auth)
async function getPublicProfileController(req, res) {
    try {
        const { username } = req.params;
        
        if (!username) {
            return res.status(400).json({
                success: false,
                message: "Username is required"
            });
        }

        const profile = await Profile.findOne({
            username: username.toLowerCase()
        });
        
        if (!profile) {
            return res.status(404).json({
                success: false,
                message: "This page doesn't exist"
            });
        }

        // Only send back safe, public fields — never clerkUserId or hidden links
        const visibleLinks = profile.links.filter(link => link.isVisible);

        res.status(200).json({
            success: true,
            data: {
                username: profile.username,
                displayName: profile.displayName,
                bio: profile.bio,
                avatarUrl: profile.avatarUrl,
                links: visibleLinks
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to load profile",
            error: error.message
        });
    }
}

module.exports =  getPublicProfileController 
  
