import { useState, useEffect } from "react";
import "../styles/ChangeLink.css";
import Button from "./Button.jsx";
import { useProfile } from "../hooks/useProfileContext.js";

const ChangeLink = () => {
    const { updateUsername, fetchProfile, profile, errors, loading } = useProfile();
    
    const [inputtedText, setinputtedText] = useState("");
    
    useEffect(() => {
        fetchProfile();
    }, []);
    
    useEffect(() => {
        if (profile?.username) {
            setinputtedText(profile.username);
        }
    }, [profile?.username]);

    // console.log(profile);

    async function handleOnClick(e) {
        e.preventDefault();
        await updateUsername(inputtedText);
    }

    return (
        <div className="change-link-card">
            <h3>Change your link</h3>
            <div className="input-group">
                <span className="prefix">oneQR.vercel.app/</span>
                <input
                    onChange={e => setinputtedText(e.target.value)}
                    value={inputtedText}
                    type="text"
                    className={`link-input ${errors.username ? 'input-error' : ""}`}
                />
            </div>
            {errors.username && <p className = "field-error">{errors.username}</p>}
            <Button onClick={handleOnClick}>{loading ? "Updating...":"Update"}</Button>
        </div>
    );
};

export default ChangeLink;
