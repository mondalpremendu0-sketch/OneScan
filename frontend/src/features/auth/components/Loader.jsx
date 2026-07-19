import "../styles/Loader.css";

export default function Loader() {
    return (
        <div className="loader-screen">
            <div className="bg-glow"></div>

            <div className="loader-content">
                <span className="loader-badge">
                    ✦ your whole internet, one link
                </span>

                <h1 className="loader-title">
                    One <span>LINK</span>
                </h1>

                <h1 className="loader-title">to all socials</h1>

                <div className="loader-ring">
                    <div className="ring-bg"></div>
                    <div className="ring-spin"></div>
                    <div className="ring-dot"></div>
                </div>

                <p className="loader-text">Initializing your profile...</p>
            </div>
        </div>
    );
}
