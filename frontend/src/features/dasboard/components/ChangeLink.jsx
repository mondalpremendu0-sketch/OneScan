import React from "react";
import "../styles/ChangeLink.css";
import Button from "./Button.jsx";

const ChangeLink = () => {
    return (
        <div className="change-link-card">
            <h3>Change your link</h3>
            <div className="input-group">
                <span className="prefix">link-to-links.vercel.app/</span>
                <input type="text" className="link-input" defaultValue="prem" />
            </div>
            <Button>Update</Button>
        </div>
    );
};

export default ChangeLink;
