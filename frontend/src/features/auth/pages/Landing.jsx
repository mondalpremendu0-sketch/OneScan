import {useUser} from "@clerk/react"
import {Navigate} from "react-router"
import Badge from '../components/Badge.jsx'
import Hero from '../components/Hero.jsx'
import SocialIcons from '../components/SocialLink.jsx'
import "./Landing.css";

export default function LandingPage() {
  const { isLoaded, isSignedIn, user} = useUser();
  console.log(user);

   if (!isLoaded) return <div style={{
    height:"100vh",
    width:"100vw",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"24px",
    fontWeight:400,
    backgroundColor:"#000000",
    color:"white"
  }}>Loading...</div>;

  if (isSignedIn) 
    return <Navigate to="/dashboard" replace />;
  
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
