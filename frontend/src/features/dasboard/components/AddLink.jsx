import React from "react";
import "../styles/AddLink.css";
import Button from "./Button.jsx";

const AddLink = () => {
    return (
        <div className="add-link-card">
            <h3>Add a link</h3>

            <input
                type="text"
                className="standard-input"
                placeholder="Title (e.g. My Instagram)"
            />

            <input
                type="text"
                className="standard-input"
                placeholder="https://..."
            />

            <select className="standard-select" defaultValue="instagram">
                <option value="instagram">instagram</option>
                <option value="twitter">twitter</option>
                <option value="youtube">youtube</option>
            </select>

            <Button>Add link</Button>
        </div>
    );
};

export default AddLink;
