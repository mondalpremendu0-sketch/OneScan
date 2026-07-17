import "./Landing.css";
import Badge from '../components/Badge.jsx'
import Hero from '../components/Hero.jsx'
import SocialIcons from '../components/SocialLink.jsx'

export default function LandingPage() {
    return (
        <div className="page">
            <div className="glow" />
            <div className="content">
                <Badge />
                <Hero />
                <SocialIcons />
            </div>
        </div>
    );
}
