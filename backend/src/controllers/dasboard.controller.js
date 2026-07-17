const Link = require('../model/socialLink.model.js');

async function dashboardController(req, res) {
  try {
    const { title, platform, url } = req.body;
    
    
    if (!title || !platform || !url) {
      return res.status(400).json({ 
        success: false,
        message: "Required data not provided (title, platform, url)"
      });
    }
    
    const updatedProfile = await Link.findOneAndUpdate(
      { userId: userId},
      { 
        $set: { title: title }, // Update the main page title
        $push: { links: { platform, url } } // Append the new link to the array
      },
      { 
        new: true,    // Return the newly updated document instead of the old one
        upsert: true, // If the user doesn't have a Link document yet, create one
        runValidators: true // Ensure the new data respects our enum and minLength rules
      }
    );
    
    res.status(201).json({
      success: true,
      message: "Link added successfully",
      data: updatedProfile
    });

  } catch (error) {
    // Catch any database or server errors
    res.status(500).json({ 
      success: false,
      message: "Failed to add link",
      error: error.message
    });
  }
}


// @desc    Get logged in user's links
// @route   GET /api/dashboard
async function getDashboardDataController(req, res) {
  try {
    const profileData = await Link.findOne({ userId: req.user._id });

    if (!profileData) {
      // Return an empty array if the user hasn't added any links yet
      return res.status(200).json({
        success: true,
        data: { title: "", links: [] }
      });
    }

    res.status(200).json({
      success: true,
      message:"data fetched successfully",
      data: profileData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error fetching dashboard data",
      error: error.message
    });
  }
}

// @desc    Delete a specific link from the user's profile
// @route   DELETE /api/dashboard/remove/:linkId
async function deleteLinkController(req, res) {
  try {
    const userId = req.user._id;
    const { linkId } = req.params;

    // Use $pull to efficiently remove the link with the matching _id from the array
    const updatedProfile = await Link.findOneAndUpdate(
      { userId: userId },
      { $pull: { links: { _id: linkId } } },
      { new: true } // Return the updated document
    );

    if (!updatedProfile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Link removed successfully",
      data: updatedProfile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error deleting link",
      error: error.message
    });
  }
}



// @desc    Update user's custom URL slug
// @route   PUT /api/dashboard/slug
// @access  Private
async function updateSlugController(req, res) {
  try {
    const userId = req.user._id;
    const { newSlug } = req.body;

    if (!newSlug) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide a new link name." 
      });
    }

    // 1. Ensure the new slug is formatted correctly (no spaces, lowercase)
    const formattedSlug = newSlug.trim().toLowerCase().replace(/\s+/g, '-');

    // 2. Check if this slug is already taken by ANOTHER user
    const existingUser = await User.findOne({ slug: formattedSlug });
    
    if (existingUser && existingUser._id.toString() !== userId.toString()) {
      return res.status(400).json({ 
        success: false, 
        message: "This link is already taken. Please choose another." 
      });
    }

    // 3. Update the user's document
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { slug: formattedSlug },
      { new: true, runValidators: true }
    ).select('-password'); 

    res.status(200).json({
      success: true,
      message: "Link updated successfully",
      data: updatedUser
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error updating link",
      error: error.message
    });
  }
}

module.exports = { dashboardController, getDashboardDataController, deleteLinkController, 
  updateSlugController 
  
};



