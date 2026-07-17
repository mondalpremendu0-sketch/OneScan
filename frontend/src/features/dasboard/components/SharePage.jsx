import React from 'react';
import '../styles/SharePage.css';
import Button from './Button.jsx';

const SharePage = () => {
  return (
    <div className="share-card">
      <p>Ready to share your page?</p>
      <Button fullWidth={false}>Generate link & QR</Button>
    </div>
  );
};

export default SharePage;