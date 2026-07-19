
import { useParams } from "react-router";
import { usePublicProfile } from "../hooks/usePublicProfileContext.js";
import "./Publicpage.css";

const PLATFORM_ICON = {
    instagram: "📷",
    github: "🐙",
    linkedin: "💼",
    twitter: "🐦",
    youtube: "▶️",
    snapchat: "👻",
    custom: "🔗"
};

const PublicProfile = () => {
    const { username } = useParams();
    
    const { profile, loading, notFound } = usePublicProfile(username);
    
    
    if (loading) {
        return (
            <div className="public-profile-page">
                <p className="public-status-text">Loading...</p>
            </div>
        );
    }

    if (notFound || !profile) {
        return (
            <div className="public-profile-page">
                <p className="public-status-text">This page doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="public-profile-page">
            <div className="public-profile-card">
                {profile.avatarUrl ? (
                    <img
                        className="public-avatar"
                        src={profile.avatarUrl}
                        alt={profile.username}
                    />
                ) : (
                    <div className="public-avatar public-avatar-placeholder" />
                )}

                <h1 className="public-username">@{profile.username}</h1>
                {profile.bio && <p className="public-bio">{profile.bio}</p>}

                <div className="public-links ">
                    {profile.links.length !== 0 ? profile.links.map(link => (
                        <a
                            key={link._id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="public-link-btn"
                        >
                            <span className="public-link-icon">
                                {PLATFORM_ICON[link.platform] || "🔗"}
                            </span>
                            <span>{link.handle || link.platform}</span>
                        </a>
                    )) : <p className="empty-link">No links added yet. </p>}
                </div>
                
                <p className="footer-text gradient-text">Nice to meet u
                </p>
                <span> 🥰</span>
                
            </div>
        </div>
    );
};

export default PublicProfile;
