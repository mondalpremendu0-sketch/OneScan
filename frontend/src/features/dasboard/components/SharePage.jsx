import React from 'react';
import '../styles/SharePage.css';
import Button from './Button.jsx';
import QrModal from './ShowQr.jsx';
import {useProfile} from '../hooks/useProfileContext.js';


const SharePage = () => {
  const {getMyLink,qrData,loading,errors} = useProfile();
  
  return (
    <div className="share-card">
      <p>Ready to share your page?</p>
      <QrModal onGenerate={getMyLink} qrData={qrData} loading={loading} />
      {errors.qr && <p className="field-error">{errors.qr}</p>}
       
    </div>
  );
};

export default SharePage;