import { useEffect } from "react";
import { useUser } from "@clerk/react";
import { Navigate } from "react-router";
import Badge from "../components/Badge.jsx";
import Hero from "../components/Hero.jsx";
import SocialIcons from "../components/SocialLink.jsx";
import HeroMockup from "../components/PublicpageTemplate.jsx";
import Loader from "../components/Loader.jsx";
import "./Landing.css";

export default function LandingPage() {
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded)
        return (
            <Loader />
        );

    if (isSignedIn) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="page">
            <div className="glow" />
            <div className="content">
                <Badge />
                <Hero />
                <SocialIcons />
                <HeroMockup />
            </div>
        </div>
    );
}
