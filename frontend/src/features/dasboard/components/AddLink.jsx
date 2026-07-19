import { useState } from "react";
import "../styles/AddLink.css";
import Button from "./Button.jsx";
import { useProfile } from "../hooks/useProfileContext.js";

const AddLink = () => {
    const { addSocial, profile,errors, loading } = useProfile();
    
    const [title, settitle] = useState("");
    const [url, seturl] = useState("");
    const [platform, setplatform] = useState();
    
    async function handelAddLink(e) {
        e.preventDefault();
        if (!title || !url) return;
       const success = await addSocial(title, url, platform);
       
       if(success){
        settitle("");
        seturl("");
        setplatform("inatagram");
       }
    }

    return (
        <div className="add-link-card">
            <h3>Add a link</h3>

            <input
                onChange={e => settitle(e.target.value)}
                value={title}
                type="text"
                className={`standard-input ${errors.addLink ? "input-error" : ""}`}
                placeholder="Title (e.g. My Instagram)"
            />

            <input
                onChange={e => seturl(e.target.value)}
                value={url}
                type="text"
                className={`standard-input ${errors.addLink ? "input-error" : ""}`}
                
                placeholder="https://..."
            />

            <select
                onChange={e => setplatform(e.target.value)}
                value = {platform}
                className="standard-select"
                defaultValue="instagram"
            >
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter (X)</option>
                <option value="youtube">Youtube</option>
                <option value="github">Github</option>
                <option value="linkedin">Linkedin</option>
                <option value="snapchat">Snapchat</option>
                <option value="facebook">Facebook</option>
                
                <option value="custom">Custom</option>
            </select>
            {errors.addLink && <p className="field-error">{errors.addLink}</p>}
            
            <Button onClick={handelAddLink}>{
              loading ? "Adding..":"Add Link"
            }</Button>
        </div>
    );
};

export default AddLink;
