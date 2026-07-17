import { Show, SignInButton, SignUpButton, useClerk } from "@clerk/react";
import "../styles/Hero.css";

export default function Hero() {

    const {redirectToSignIn,redirectToSignUp} =  useClerk();
    
    return (
        <section className="hero">
            <h1 className="hero-title">
                One <span className="gradient-text">LINK</span> to all
                <br />
                socials
            </h1>

            <p className="hero-tagline">(QR bhi hai 📱)</p>

            <p className="hero-desc">
                GitHub, LinkedIn, Twitter, Snapchat — drop them all in one bio
                page. Share the link, or just flash the QR.
            </p>

            <div className="hero-actions">
              
                        <button 
                        onClick={() =>
                        redirectToSignUp()}
                        className="btn-primary">
                            <span>Create my page — it's free</span>
                        </button>
                
                  
                        <button 
                        onClick={() => redirectToSignIn({
                          afterSignInUrl: '../io'
                        })}
                        className="btn-secondary">Sign In</button>
                    
                
            </div>
        </section>
    );
}
