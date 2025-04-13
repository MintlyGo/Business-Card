import React from 'react';
import '../styles.css';
import logo from '../assets/mintlygo-logo.png'; // Adjust the path as necessary

const BusinessCard: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={logo} alt="MintlyGo Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <h1>MintlyGo</h1>
      <button onClick={() => window.location.href = 'https://mintlygo.com'}>Website</button>
      <button onClick={() => window.location.href = 'https://x.com/mintlygo'}>Follow on X</button>
      <button onClick={() => window.location.href = 'mailto:Invest@mintlygo.com'}>Email Us</button>
    </div>
  );
};

export default BusinessCard;