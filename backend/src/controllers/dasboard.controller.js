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

module.exports = { dashboardController };