export default function Navbar() {
    return (
        <nav className="navbar bg-primary text-neutral-content fixed top-0 w-full z-10">
        <div className="flex-1 ">
          <a className="btn btn-ghost ">
          <img
            src="/images/smiley.png"
            style={{ width: '50px', height: '50px' }} // กำหนดความกว้างและความสูง
            />  
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ fontSize: '20px' ,fontWeight: 'bold'}}>APES</span>
            <span style={{ fontSize: '16px' ,fontWeight: 'bold' }}>CTF</span>
          </span>     
          </a>
          <a className="btn btn-ghost  ">
          <img
            src="/images/learn.png"
            style={{ width: '40px', height: '40px' }} // กำหนดความกว้างและความสูง
            />  
          <span>
            <span style={{ display: 'block',fontSize: '20px',fontWeight: 'bold'  }}>Learn</span>
          </span>      
          </a>
          <a className="btn btn-ghost ">
          <img
            src="/images/practice.png"
            style={{ width: '50px', height: '40px' }} // กำหนดความกว้างและความสูง
            />  
          <span>
            <span style={{ display: 'block',fontSize: '20px',fontWeight: 'bold'  }}>Practice</span>
          </span>      
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn bg-green-400">Join Now</button>
        </div>
      </nav>
    )
}

import React from "react";

