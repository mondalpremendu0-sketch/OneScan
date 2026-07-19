import { useEffect } from "react";
import "../styles/Yourlinks.css";
import { useProfile } from "../hooks/useProfileContext.js";

const YourLinks = () => {
    const { profile, fetchProfile, removeLink, loading, errors } = useProfile();

    useEffect(() => {
        fetchProfile();
    }, []);

    const links = profile?.links || [];

    async function handleRemove(linkId) {
        await removeLink(linkId);
    }

    return (
        <div className="your-links-card">
            <h3>Your links ({links.length})</h3>
            {errors.deleteLink && (
                <p className="field-error">{errors.deleteLink}</p>
            )}

            {links.length === 0 ? (
                <p className="empty-links-text">No links yet — add one.</p>
            ) : (
                <ul className="links-list">
                    {links.map(link => (
                        <li className="link-item" key={link._id}>
                            <div className="link-item-info">
                                <span className="link-item-title">
                                    {link.handle}
                                </span>
                                <span className="link-item-url">
                                    {link.url}
                                </span>
                            </div>
                            <button
                                className="remove-link-btn"
                                onClick={() => handleRemove(link._id)}
                                disabled={loading}
                                aria-label={`Remove ${link.handle}`}
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default YourLinks;
