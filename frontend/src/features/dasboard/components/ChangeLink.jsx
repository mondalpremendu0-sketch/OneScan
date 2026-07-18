import {useState} from "react";
import "../styles/ChangeLink.css";
import Button from "./Button.jsx";

const ChangeLink = () => {
  
  const [inputtedText, setinputtedText] = useState('')
  
  function handleOnClick(e) {
    e.preventDefault();
    
  }
  
  
    return (
        <div className="change-link-card">
            <h3>Change your link</h3>
            <div className="input-group">
                <span className="prefix">link-to-links.vercel.app/</span>
                <input 
                onChange={(e) => setinputtedText(e.target.value)}
                value={inputtedText}
                type="text" 
                className="link-input" />
            </div>
            <Button onClick={handleOnClick}>Update</Button>
        </div>
    );
};

export default ChangeLink;
