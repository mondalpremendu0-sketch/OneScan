import "../styles/PublicpageTempelate.css";

const LINKS = ["GitHub", "LinkedIn", "Twitter / X", "Snapchat"];

const HeroMockup = () => {
    return (
        <div className="hero-mockup-scene">
            <div className="hero-live-badge">✓ live in 60s</div>

            <div className="hero-phone-card">
                <div className="hero-phone-notch" />

                <div className="hero-avatar" />

                <h2 className="hero-username">@yourname</h2>
                <p className="linkbio">link in bio, literally</p>

                <div className="hero-links">
                    {LINKS.map(label => (
                        <div className="hero-link-pill" key={label}>
                            {label}
                        </div>
                    ))}
                </div>
            </div>

            <div className="hero-qr-badge">
                <div className="hero-qr-grid">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <span
                            key={i}
                            className={`hero-qr-dot ${[0, 1, 3,5,6,9,10,12,14,15].includes(i) ? "filled" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroMockup;
