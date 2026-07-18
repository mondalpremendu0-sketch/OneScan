const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    platform: {
        type: String,
        enum: [
            "instagram",
            "github",
            "linkedin",
            "twitter",
            "snapchat",
            "custom"
        ],
        required: true
    },
    url: { type: String, required: true },
    handle: { type: String, default: "" },
    isVisible: { type: Boolean, default: true }
});

const profileSchema = new mongoose.Schema(
    {
        clerkUserId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        displayName: { type: String, default: "" },
        bio: { type: String, default: "" },
        avatarUrl: { type: String, default: "" },
        links: [linkSchema]
    },
    { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
