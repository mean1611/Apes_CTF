import React from "react";

function Footer() {
  return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            
        <aside>
            <img
            src="/images/smiley.png"
            style={{ width: '50px', height: '50px' }} // กำหนดความกว้างและความสูง
            /> 
            <p className="font-bold">
            Project Apes CTF <br/>Providing knowledge since 2023
            </p> 
            <p>Copyright © 2023 - All right reserved</p>
        </aside> 
            
        </footer>
  );
}

export default Footer;
