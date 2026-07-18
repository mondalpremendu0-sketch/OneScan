const Profile = require("../model/profile.model.js");
const sanitizeSlug = require("../utils/slugValidation.utils.js");

// @desc     user's DASBOARD
// @route   GET /api/profile/me
// @access  Private

async function getMyProfileController(req, res) {
    try {
        const { userId } = req.auth;

        let profile = await Profile.findOne({ clerkUserId: userId });

        if (!profile) {
            // first time this user has ever opened the dashboard —
            // create a blank profile so the frontend has something to render
            profile = await Profile.create({
                clerkUserId: userId,
                username: `user-${userId.slice(-8)}`,
                links: []
            });
        }

        res.status(200).json({
            success: true,
            data: profile
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to load profile",
            error: error.message
        });
    }
}

// @desc    Update user's custom URL slug
// @route   PUT /api/profile/me
// @access  Private
async function updateLinkUsernameController(req, res) {
    try {
        const { userId } = req.auth;
        console.log(userId);
        let { slug } = req.body;
        if (!slug) {
            return res.status(400).json({
                message: "please provide a slug!"
            });
        }
        slug = sanitizeSlug(slug);

        const alreadyTaken = await Profile.findOne({
            username: slug,
            clerkUserId: { $ne: userId }
        });
        if (alreadyTaken) {
            return res.status(409).json({
                message: "its already taken"
            });
        }

        const updatedProfile = await Profile.findOneAndUpdate(
            { clerkUserId: userId },
            { username: slug },
            { new: true, upsert: true }
        );

        if (!updatedProfile) {
            return res.status(400).json({
                message: "Error Updating Slug"
            });
        }

        res.status(200).json({
            success: true,
            message: "Updated Successfully!",
            data: updatedProfile
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({
            message: "Server is busy",
            error: e.message
        });
    }
}

// @desc    Add user's sosial URL
// @route   POST /api/profile/addLink
// @access  Private
async function addLinkController(req, res) {
    const ALLOWED_PLATFORMS = [
        "instagram",
        "github",
        "linkedin",
        "twitter",
        "snapchat",
        "custom"
    ];
    try {
        const { userId } = req.auth;
        let { title, url, platform } = req.body;

        if (!title || !platform || !url) {
            return res.status(400).json({
                success: false,
                message: "Required data not provided (title, platform, url)"
            });
        }

        title = title.trim();
        url = url.trim();

        if (!ALLOWED_PLATFORMS.includes(platform)) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid platform" });
        }

        try {
            new URL(url);
        } catch {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid URL"
            });
        }

        const existingProfile = await Profile.findOne({ clerkUserId: userId });

        if (!existingProfile) {
            return res
                .status(404)
                .json({ success: false, message: "Profile not found" });
        }

        const alreadyHasPlatform = existingProfile.links.some(
            link => link.platform === platform
        );

        if (alreadyHasPlatform) {
            return res.status(409).json({
                success: false,
                message: `You already have a ${platform} link. Remove it first or edit it instead.`
            });
        }

        const updatedProfile = await Profile.findOneAndUpdate(
            { clerkUserId: userId },
            { $push: { links: { platform, url, handle: title } } },
            { new: true }
        );

        res.status(201).json({
            success: true,
            message: "Link added successfully",
            data: updatedProfile
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add link",
            error: error.message
        });
    }
}

// @desc    Delete user's social URL
// @route   DELETE /api/profile/remove/:det
// @access  Private
async function deleteSocialLinkController(req, res) {
    try {
        const { userId } = req.auth;
        const { linkId } = req.params;

        if (!linkId) {
            return res.status(400).json({
                success: false,
                message: "Required data not provided (linkId)"
            });
        }
        // Confirm the link actually exists before pulling — catches
        // "already deleted" or "not yours" cases that $pull silently ignores
        const profileWithLink = await Profile.findOne({
            clerkUserId: userId,
            "links._id": linkId
        });

        if (!profileWithLink) {
            return res.status(404).json({
                success: false,
                message: "Link not found"
            });
        }

        const updatedProfile = await Profile.findOneAndUpdate(
            { clerkUserId: userId },
            { $pull: { links: { _id: linkId } } },
            { new: true }
        );

        if (!updatedProfile) {
            return res
                .status(404)
                .json({ success: false, message: "Link not deleteed!" });
        }

        res.status(201).json({
            success: true,
            message: "Link Deleted successfully",
            data: updatedProfile
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to Delete link",
            error: error.message
        });
    }
}

// @desc     Get the logged-in user's public shareable link (for QR encoding)
// @route   GET /api/profile/me/link
// @access  Private (requires auth)
async function getMyLinkController(req, res) {
    try {
        const { userId } = req.auth;

        const profile = await Profile.findOne({ clerkUserId: userId });

        if (!profile) {
            return res.status(404).json({
                success: false,
                message: "Profile not found"
            });
        }

        const profileUrl = `${process.env.CLIENT_URL}/u/${profile.username}`;

        res.status(200).json({
            success: true,
            data: {
                username: profile.username,
                qrUrl: profileUrl
            },
            message: "Fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to generate link",
            error: error.message
        });
    }
}

module.exports = {
    addLinkController,
    updateLinkUsernameController,
    deleteSocialLinkController,
    getMyProfileController,
    getMyLinkController
};
