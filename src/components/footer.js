import '@fontsource/manrope';
import React from 'react';
import '../App.css'; // Import your custom CSS for styling

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
      <hr style={{ backgroundColor: "#F4BC1E", height: "2px", border: "none",width:"60%" }} />

        <p style={{color:"#828595"}}>
          WCU IS AN <span className="highlight">ONLINE EDUCATIONAL</span> COMMUNITY PLATFORM. ANY MEMBERS ENROLLED MUST UNDERSTAND THAT THEY ARE RESPONSIBLE FOR IMPLEMENTING THE KNOWLEDGE TAUGHT INSIDE OF WCU. WCU DOES <span className="highlight">NOT GUARANTEE</span> ANY PROFIT EARNINGS. WCU IS <span className="highlight">NOT RESPONSIBLE</span> FOR ANY STUDENT'S DECISION AND/OR FAILURE TO MAKE MONEY.
        </p>
      </div>

      <div className="footer-links">
        <a href="/privacy-policy" className="footer-link">PRIVACY POLICY</a>
        <a href="/terms-and-conditions" className="footer-link">TERMS AND CONDITIONS</a>
        <a href="/rights" className="footer-link">RIGHTS RESERVED BY ACE INSTITUTE</a>
      </div>
    </div>
  );
};

export default Footer;
